export function createSvg(width, height){
 const svg = d3.select("#line-chart").append("svg")
    .attr('width', width)
    .attr('height', height);
    return svg;
}