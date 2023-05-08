export function createBarChartSvg(width, margin, height) {
    const svg = d3.select('#bar-chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    return svg;
}