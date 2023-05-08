export function Ygrid(yScale, margin, width){
    const yGrid = (g) => g
        .attr('class', 'grid-lines')
        .selectAll('line')
        .data(yScale.ticks())
        .join('line')
        .attr('x1', margin.left)
        .attr('x2', width - margin.right)
        .attr('y1', d => yScale(d))
        .attr('y2', d => yScale(d))
        .attr('stroke', '#ddd')
        .attr('stroke-width', '1px');
        return yGrid;
}