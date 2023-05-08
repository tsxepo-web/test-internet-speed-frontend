export function calls(svg, xAxis, yAxis, xGrid, yGrid){
    svg.append('g').call(xAxis)
    svg.append('g').call(yAxis)
    svg.append('g').call(xGrid)
    svg.append('g').call(yGrid)
}