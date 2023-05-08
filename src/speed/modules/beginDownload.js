import { calculateSpeed } from "./calculateSpeed.js";
import { arcPath } from "./pathMovement.js";

export function downloadStart(lastNow, lastKBytes, xhr) {
    xhr.onprogress = (e) => {
        if (e.lengthComputable) {
            let mbps = calculateSpeed(e, lastKBytes, lastNow);
            arcPath(mbps);
            sessionStorage.setItem("downloadSpeed", mbps);
        }        
    } 
}