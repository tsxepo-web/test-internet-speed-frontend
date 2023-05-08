import { drawBarChart } from "../barcharts.js";

async function getResult() {
    const location = sessionStorage.getItem('location');
    const response = await fetch(`https://network-speed-test.azurewebsites.net/stats/ISP?location=${location}`);
    const data = await response.json();
    const isps = data.isPs;
    console.log(isps);  
    drawBarChart(isps);
  }
  getResult();