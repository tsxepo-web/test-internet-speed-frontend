export function rectangle(svg, colorScale, x, y, isps) {  
    svg.selectAll('rect')
      .attr('class', 'overlay')
        .data(isps)
        .enter().append('rect')
        .attr('x', d => x(d.isp))
        .attr('y', d => y(d.downloadSpeed))
        .attr('width', x.bandwidth())
        .attr('height', d => y(0) - y(d.downloadSpeed))
        .attr('fill', d => colorScale(d.isp))
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
    }