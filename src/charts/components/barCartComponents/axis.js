export function yAxis(isps, height, margin) {
    const y = d3.scaleLinear()
      .domain([0, d3.max(isps, d => d.downloadSpeed)])
      .range([height - margin.bottom, margin.top]);
      return y;
    }

export function xAxis(isps, margin, width) {
    const x = d3.scaleBand()
        .domain(isps.map(d => d.isp))
        .range([margin.left, width - margin.right])
        .padding(0.1);
        return x;
}