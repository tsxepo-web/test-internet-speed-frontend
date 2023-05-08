export function Xgrid(xScale, margin, height) {    
    const xGrid = (g) => g
        .attr('class', 'grid-lines')
        .selectAll('line')
        .data(xScale.ticks())
        .join('line')
        .attr('x1', d => xScale(d))
        .attr('x2', d => xScale(d))
        .attr('y1', margin.top)
        .attr('y2', height -  margin.bottom)
        .attr('stroke', '#ddd')
        .attr('stroke-width', '1px');
        return xGrid;
}