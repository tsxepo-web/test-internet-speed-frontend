import { arcLine, pathForeground } from "../charts/piechart.js";
import { postData } from "../userInfo/postUser.js";

const ele = document.getElementById('upload');

export function upload() {
    var speedOutput = document.querySelector(".textBox");
    var lastNow = new Date().getTime();
    var lastKBytes = 0;
    var xhr = new window.XMLHttpRequest();
    var url = "https://httpbin.org/post";
    xhr.upload.addEventListener("progress", function(e) {
        if (e.lengthComputable) {
            var now = new Date().getTime();
            var bytes = e.loaded; 
            var total = e.total;
            var percent = bytes / total * 100;
            var kbytes = bytes / 1024;
            var mbytes = kbytes / 1024;
            var uploadedkBytes = kbytes - lastKBytes;
            var uploadedMbs = uploadedkBytes/1000;
            var elapsed = (now - lastNow) / 1000;
            var kbps =  elapsed ? uploadedkBytes / elapsed : 0 ;
            var mbps = elapsed ? uploadedMbs / elapsed : 0 ;
            lastKBytes = kbytes; 
            lastNow = now;

            speedOutput.innerText = mbps.toFixed(2);
            document.querySelector('.textBox').innerHTML = mbps.toFixed(3) + 'Mbps';
            arcLine.endAngle((mbps / 180) * Math.PI - Math.PI/2);
            pathForeground.datum(mbps).attr('d', arcLine);
            console.log(mbytes.toFixed(2) + "MB (" + percent.toFixed(3) + "%) " + kbps.toFixed(2) + "KB/s");
            sessionStorage.setItem("uploadSpeed", mbps);
        }
    }, false);
    var data = getUploadData(10000 * 1022);
    xhr.open("POST", url, true);
    xhr.send(data)
    
    xhr.onload = () => {
        postData();
    }
    
    function getUploadData(length = 1022) {
        var myData = "d=";
        for(var i = 0 ; i < length; i++)
        myData += "k";
        return myData
    }
}