export function getBackground(svg, width, margin, height) {
    svg.append("rect")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("fill", "#f2f2f2");
}