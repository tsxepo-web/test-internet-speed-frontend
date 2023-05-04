import { arcLine, pathForeground } from "../charts/piechart.js";
import { postData } from "../userInfo/postUser.js";
import { calculateSpeed } from "./modules/calculateSpeed.js";
import { getUploadData } from "./modules/uploadData.js";

export function upload() {
    var lastNow = new Date().getTime();
    var lastKBytes = 0;
    var xhr = new window.XMLHttpRequest();
    var url = "https://httpbin.org/post";
    xhr.upload.addEventListener("progress", function(e) {
        if (e.lengthComputable) {
            let mbps = calculateSpeed(e, lastKBytes, lastNow);
            arcLine.endAngle((mbps / 180) * Math.PI - Math.PI/2);
            pathForeground.datum(mbps).attr('d', arcLine);
            sessionStorage.setItem("uploadSpeed", mbps);
        }
    }, false);
    xhr.onload = () => {
        postData();
        document.querySelector("#upload").innerHTML = sessionStorage.getItem("uploadSpeed") + "Mbps";
    }
    
    getUploadData(length = 1022);
    var data = getUploadData(10000 * 1022);
    xhr.open("POST", url, true);
    xhr.send(data)
    
}