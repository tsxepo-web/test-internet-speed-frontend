import { arcLine, pathForeground } from "../charts/piechart.js";
import { upload } from "./upload.js";

const el = document.getElementById('download');
  
el.addEventListener('click', () => {
    const url = 'https://img.yumpu.com/30389839/1/500x640/download-20-pages-45-mb-university-of-victoria.jpg';
    var lastNow = new Date().getTime();
    var lastKBytes = 0;
    const xhr = new XMLHttpRequest();   

    xhr.onprogress = (e) => {
    if (e.lengthComputable) {
        let now = new Date().getTime();
        let bytes = e.loaded;
        let total = e.total;
        let percent = bytes / total * 100;
        let kbyte = bytes / 1024;
        let mbytes = kbyte / 1024;
        let uploadedkBytes = kbyte - lastKBytes;
        let uploadedMbs = uploadedkBytes/1000;
        let elapsed = (now - lastNow) / 1000;
        let kbps = elapsed ? uploadedkBytes / elapsed : 0;
        let mbps = elapsed ? uploadedMbs / elapsed : 0;
        lastKBytes = kbyte;
        lastNow = now;

        arcLine.endAngle((mbps / 180) * Math.PI - Math.PI/2);
        pathForeground.datum(mbps).attr('d', arcLine)
        document.querySelector('.textBox').innerHTML = mbps.toFixed(3) + 'Mbps';
        console.log(mbytes.toFixed(2) + "MB (" + percent.toFixed(3) + "%) " + kbps.toFixed(2) + "KB/s");
        sessionStorage.setItem("downloadSpeed", mbps);
     }        
    }
    xhr.open('GET', url + '?n=' + Math.random(), true);
    xhr.send();

    xhr.onload = () => {
        document.querySelector('.textBox').innerHTML = "Checking Upload";
        upload();
    }
});