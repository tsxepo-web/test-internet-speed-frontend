 export function x(height, margin, xScale){
    const xAxis = (g) => g  
        .attr('transform', `translate(0, ${height - margin.bottom})`) 
        .call(d3.axisBottom(xScale));
        return xAxis;
 }

 export function y(margin, yScale){
    const yAxis = (g) => g  
        .attr('transform', `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(yScale));
        return yAxis;
    }