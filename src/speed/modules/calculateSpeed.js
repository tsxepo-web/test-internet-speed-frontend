import { uploadResults } from "./showUploadResults.js";

export function calculateSpeed(e, lastKBytes, lastNow) {
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
    console.log(mbytes.toFixed(2) + "MB (" + percent.toFixed(3) + "%) " + kbps.toFixed(2) + "KB/s");
    uploadResults(kbps, mbps);
    return mbps.toFixed(3);
}