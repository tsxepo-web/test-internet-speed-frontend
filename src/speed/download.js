import { downloadStart } from "./modules/beginDownload.js";
import { downloadEnd } from "./modules/finishDownload.js";

//const el = document.getElementById('check-speed');
  
 export function downloading() {
    const url = 'https://img.yumpu.com/30389839/1/500x640/download-20-pages-45-mb-university-of-victoria.jpg';
    document.querySelector('#download').innerHTML = "Checking...";
    var lastNow = new Date().getTime();
    var lastKBytes = 0;
    const xhr = new XMLHttpRequest();   
    
    downloadStart(lastNow, lastKBytes, xhr);
    downloadEnd(xhr);
    xhr.open('GET', url + '?n=' + Math.random(), true);
    xhr.send();
};