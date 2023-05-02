let speedMbps = 130;
if(speedMbps > 180)
{
    speedMbps = 180;
}

export const data = [
    {startAngle: Math.PI*3/2, endAngle: Math.PI*2},
    {startAngle: 0, endAngle: Math.PI/2},
];
const width = 400;
const height = 400;

const arc = d3.arc()
    .innerRadius(width /2.3)
    .outerRadius(width / 2);

const svg = d3.select('#chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height - 200)
    .attr('stroke', 'black');

const group = svg.append('g')
    .attr("transform", `translate(${width/2}, ${height/2})`);

const arcs = group.selectAll('path')
    .data(data)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('stroke', 'black')
    .attr('fill', '#fff')

export const arcLine = d3.arc()
    .innerRadius(width/2.3)
    .outerRadius(height/2)
    .cornerRadius(5)
    .startAngle(-Math.PI/2)
    .endAngle(function(d) {return (d/180) * Math.PI - Math.PI/2;});

export const pathForeground = group.append('path')
    .datum(speedMbps)
    .attr('d', arcLine)
    .style("fill", "#0d0240")
    .style("stroke", "#000")
    .style("stroke-width", 1);

const text = group.append('text')
    .text('Start')
    .attr('class', 'textBox')
    .attr('text-anchor', 'middle')
    .style('font-size', '24px')
    .attr('transform', `translate(0, ${-width/8})`);


const numbers = group.selectAll('text')
  .data(d3.range(0, 181, 30).concat([0]))
  .enter()
  .append('text')
  .text(d => d)
  .attr('text-anchor', 'middle')
  .attr('x', d => (width/4 + 20) * Math.cos((d - 180) * Math.PI / 180))
  .attr('y', d => (width/4 + 20) * Math.sin((d - 180) * Math.PI / 180))
  .attr('font-size', '16px')
  .attr('stroke', 'black')
  .attr('transforn', d => `rotate(${d - 90})`);