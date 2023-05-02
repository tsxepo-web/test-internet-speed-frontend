async function getResult() {
  const location = sessionStorage.getItem("location");
  const response = await fetch(`https://network-speed-test.azurewebsites.net/stats/ISP?location=${location}`);
  const data = await response.json();
  const isps = data.isPs;

  const margin = { top: 20, right: 20, bottom: 30, left: 50 };
  const width = 600;
  const height = 350;

  const svg = d3.select("#bar-chart")
  .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`);
    
  const svgContainer = d3.select('#container');


  const y = d3.scaleLinear()
    .domain([0, d3.max(isps, d => d.downloadSpeed)])
    .range([height - margin.bottom, margin.top]);

  const x = d3.scaleBand()
    .domain(isps.map(d => d.isp))
    .range([margin.left, width - margin.right])
    .padding(0.1);

  svg.append('g')
    .attr('transform', `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x));

  svg.append('g')
    .attr('transform', `translate(${margin.left},0)`)
    .call(d3.axisLeft(y));

  svg.selectAll('rect')
      .data(isps)
      .enter().append('rect')
      .attr('class', 'bar-group')
      .attr('x', d => x(d.isp))
      .attr('y', d => y(d.downloadSpeed))
      .attr('width', x.bandwidth())
      .attr('height', d => y(0) - y(d.downloadSpeed))
      .attr('fill', 'steelblue')
      .on('mouseenter', function (actual, i) {
        d3.selectAll('.value')
          .attr('opacity', 0)

        d3.select(this)
          .transition()
          .duration(300)
          .attr('opacity', 0.6)
          .attr('x', (a) => x(a.isp) - 5)
          .attr('width', x.bandwidth() + 10)


        svg.append('text')
          .attr('class', 'divergence')
          .attr('x', (a) => x(a.isp) + x.bandwidth() / 2)
          .attr('y', (a) => y(a.uploadSpeed) + 30)
          .attr('fill', 'white')
          .attr('text-anchor', 'middle')
          .text((a, idx) => {
            const divergence = (a.value - actual.uploadSpeed).toFixed(1)
            
            let text = ''
            if (divergence > 0) text += '+'
            text += `${divergence}%`

            return idx !== i ? text : '';
          })

      })
      .on('mouseleave', function () {
        d3.selectAll('.value')
          .attr('opacity', 1)

        d3.select(this)
          .transition()
          .duration(300)
          .attr('opacity', 1)
          .attr('x', (a) => x(a.isp))
          .attr('width', x.bandwidth())
      });
  svg
  .append('text')
  .attr('x', -(height/4) - 100)
  .attr('y', 10)
  .style("font-size", "14px")
  .attr('transform', 'rotate(-90)')
  .attr('text-anchor', 'middle')
  .text('Speed (Mbps)')

  svg.append('text')
    .attr('class', 'title')
    .attr('x', width / 2 + 80)
    .attr('y', 40)
    .attr('text-anchor', 'middle')
    .text('ISP Comparison')

}
getResult();