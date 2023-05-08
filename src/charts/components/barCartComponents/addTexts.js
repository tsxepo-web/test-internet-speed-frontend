export function texts(svg, height, width) {
    svg.append('text')
    .attr('x', -(height/4) - 100)
    .attr('y', 10)
    .style("font-size", "14px")
    .attr('transform', 'rotate(-90)')
    .attr('text-anchor', 'middle')
    .text('Speed (Mbps)')
  
    svg.append('text')
      .attr('class', 'title')
      .attr('x', width / 2 + 80)
      .attr('y', 15)
      .attr('text-anchor', 'middle')
      .text('ISP Comparison'); 
  }