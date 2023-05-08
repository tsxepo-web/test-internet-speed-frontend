import { downloading } from "../speed/download.js";

let speedMbps = 10;
if(speedMbps > 270)
{
    speedMbps = 270;
}

export const data = [
    {startAngle: Math.PI*3/2, endAngle: Math.PI*3},
];
const width = 600;
const height = 600;
const margin = 40;

const radius = Math.min(width, height) / 2 - margin;

const arc = d3.arc()
    .innerRadius(200)
    .outerRadius(radius);

const svg = d3.select('#chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('stroke', 'black');

svg.append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', width)
    .attr('height', height)
    .attr('fill', '#f0f0f0');

const group = svg.append('g')
    .attr("transform", `translate(${width/2}, ${height/2}) rotate(-45)`);

const arcs = group.selectAll('path')
    .data(data)
    .enter()
    .append('path')
    .attr('d', arc);

export const arcLine = d3.arc()
    .innerRadius(width / 2.3)
    .outerRadius(height/3)
    .cornerRadius(5)
    .startAngle(-Math.PI/2)
    .endAngle(function(d) {return (d/180) * Math.PI - Math.PI/2;});

export const pathForeground = group.append('path')
    .datum(speedMbps)
    .attr('d', arcLine)
    .style("fill", "blue")
    .style("stroke", "#000")
    .style("stroke-width", 1);


const textBox = group.append('g')
    .attr('transform', `translate(0, ${-width/180}) rotate(45)`);

const textBg = textBox.append('rect')
    .attr('x', -70)
    .attr('y', -20)
    .attr('width', 150)
    .attr('height', 40)
    .style('fill', 'gray')
    .style('stroke', 'black');

const text = textBox.append('text')
    .text('Mbps')
    .attr('class', 'textBox')
    .attr('text-anchor', 'middle')
    .style('font-size', '24px')
    .attr('dy', '0.35em');

const numbers = group.selectAll('text')
  .data(d3.range(0, 271, 30).concat([0]))
  .enter()
  .append('text')
  .text(d => d)
  .attr('text-anchor', 'middle')
  .attr('x', d => (width/4 + 5) * Math.cos((d - 180) * Math.PI / 180))
  .attr('y', d => (width/4 + 5) * Math.sin((d - 180) * Math.PI / 180))
  .attr('transform', `translate(0, ${width/180}) rotate(0)`);
  
  const startCircle = group.append('circle')
  .attr('r', 5)
  .style('fill', 'white')
  .attr('stroke', '#000')
  .attr('stroke-width', 1)
  .attr('transform', `translate(${arcLine.centroid(0)})`);

export const endCircle = group.append('circle')
  .attr('r', 5)
  .style('fill', 'white')
  .attr('stroke', '#000')
  .attr('stroke-width', 1)
  .attr('transform', `translate(${arcLine.centroid(speedMbps *2)})`);

  const center = svg.append('g')
    .attr('transform', `translate(${width/2}, ${height/2})`);

const button = svg.append('g')
  .attr('class', 'button')
  .attr('transform', `translate(${width / 2}, ${height - margin - 80})`)
  .attr('cursor', 'pointer')
  .on('click', () => {
    downloading();
  });

button.append('rect')
  .attr('x', -50)
  .attr('y', -20)
  .attr('width', 100)
  .attr('height', 40)
  .attr('rx', 20)
  .attr('ry', 20)
  .attr('fill', 'blue');

button.append('text')
  .text('Start')
  .attr('text-anchor', 'middle')
  .attr('dy', '0.3em')
  .attr('fill', 'black');

