export function scaleX(historyData, margin, width){
    const xScale = d3.scaleTime()
        .domain(d3.extent(historyData, d => d.date))
        .range([margin.left, width - margin.right]);
        return xScale;
}

export function scaleY(historyData, height, margin) {
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(historyData, d => d.uploadSpeed)]).nice()
        .range([height - margin.bottom, margin.top]);
        return yScale;
    }