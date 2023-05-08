export function labels(svg, margin, height, width){
    svg.append("text")
        .attr("class", "y-label")
        .attr("text-anchor", "middle")
        .attr("transform", `translate(${margin.left / 2 - 10}, ${height / 2}) rotate(-90)`)
        .text("Speed (Mbps)");
    
        svg.append("text")
        .attr("class", "x-label")
        .attr("text-anchor", "middle")
        .attr("transform", `translate(${width / 2}, ${height - margin.bottom / 2 + 20})`)
        .text("Date");
    }