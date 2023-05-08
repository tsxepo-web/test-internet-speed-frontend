export function background(svg) {
    svg.append("rect")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("fill", "#F8F8F8");
}