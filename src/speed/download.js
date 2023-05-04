import { arcLine, pathForeground } from "../charts/piechart.js";
import { calculateSpeed } from "./modules/calculateSpeed.js";
import { upload } from "./upload.js";

const el = document.getElementById('check-speed');
  
el.addEventListener('click', () => {
    const url = 'https://img.yumpu.com/30389839/1/500x640/download-20-pages-45-mb-university-of-victoria.jpg';
    document.querySelector('#download').innerHTML = "Checking...";
    var lastNow = new Date().getTime();
    var lastKBytes = 0;
    const xhr = new XMLHttpRequest();   

    xhr.onprogress = (e) => {
        if (e.lengthComputable) {
            let mbps = calculateSpeed(e, lastKBytes, lastNow);
            arcLine.endAngle((mbps / 180) * Math.PI - Math.PI/2);
            pathForeground.datum(mbps).attr('d', arcLine)
            sessionStorage.setItem("downloadSpeed", mbps);
        }        
    } 
    xhr.onload = () => {
        document.querySelector("#download").innerHTML = sessionStorage.getItem("downloadSpeed") + "Mbps";
        document.querySelector('#upload').innerHTML = "Checking...";
        upload();
    }
    xhr.open('GET', url + '?n=' + Math.random(), true);
    xhr.send();
});