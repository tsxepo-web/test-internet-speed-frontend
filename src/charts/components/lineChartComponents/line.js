export function showLine(svg, historyData, line) {
    svg.append('path')
    .datum(historyData)
    .attr('class', 'line')
    .attr('d', line)
}

export function lines(xScale, yScale) {
    const line = d3.line()
        .defined(d => !isNaN(d.uploadSpeed))
        .x(d => xScale(d.date))
        .y(d => yScale(d.uploadSpeed));
    return line;
}