export function barColors(isps) {
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
      .domain(isps.map(d => d.isp));
      return colorScale;
}