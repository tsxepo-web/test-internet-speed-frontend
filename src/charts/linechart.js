//const userId = "5FC6C5FA6A5F6D64AFC0F15B";
const userId = localStorage.getItem("userId");
fetch(`https://network-speed-test.azurewebsites.net/stats/userId/history?userId=${userId}`)
.then(response => response.json())
.then(data => {
    const historyData = data.map(d => ({
        date: new Date(d.date),
        uploadSpeed: d.uploadSpeed,
        downloadSpeed: d.downloadSpeed
    }));

    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = 600;
    const height = 300;

    const svg = d3.select("#line-chart").append("svg")
        .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
        .append("g")
        .style("background-color", "#888")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const x = d3.scaleTime()
        .domain(d3.extent(historyData, d => d.date))
        .range([0, width]);

    const y = d3.scaleLinear()
        .domain([0, d3.max(historyData, d => d.uploadSpeed)])
        .range([height, 0]);

    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y);

    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .call(yAxis);
        
  svg.append("text")
    .attr("text-anchor", "middle")
    .style("font-size", "14px")
    .attr("transform", "translate("+ (margin.left - 84 ) +","+(height/2)+")rotate(-90)")  
    .text("Speed ( Mbps ) ");


    svg.append("text")
        .style("font-size", "14px")
        .attr("text-anchor", "middle") 
        .attr("transform", "translate("+ (width/2) +","+(height-(margin.bottom - 64))+")")
        .text("Date");
        
    const line = d3.line()
        .x(d => x(d.date))
        .y(d => y(d.uploadSpeed));

        
  svg.append("text")
    .attr("x", (width / 2))             
    .attr("y", 20 - (margin.top / 2))
    .attr("text-anchor", "middle")  
    .style("font-size", "16px") 
    .text("History");

    svg.append("path")
        .datum(historyData)
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", line);
})
.catch(error => {
    console.error('Error:', error);
});