export function yGrids(svg, margin, width, y) {
    const yGrid = svg.append('g')
        .attr('class', 'grid-lines')
        .attr('transform', `translate(${margin.left},0)`)
        .call(d3.axisLeft(y)
        .tickSizeInner(-width + margin.left + margin.right)
        .tickFormat('')
    );  
    return y;
}

export function xGrids(svg, height, margin, x) {
    const xGrid =  svg.append('g')
        .attr('class', 'grid-lines')
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x)
        .tickSize(-height)
        .tickFormat(''),
    );
    return x;
}