import { drawLineChart } from "../linechart.js";

const userId = localStorage.getItem("userId");
fetch(`https://network-speed-test.azurewebsites.net/stats/userId/history?userId=${userId}`)
.then(response => response.json())
.then(data => {
    const historyData = data.map(d => ({
        date: new Date(d.date),
    uploadSpeed: d.uploadSpeed,
    downloadSpeed: d.downloadSpeed
}));
    drawLineChart(historyData);
})
.catch(error => {
    console.error('Error:', error);
});