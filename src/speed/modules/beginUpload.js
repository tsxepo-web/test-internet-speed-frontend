import { calculateSpeed } from "./calculateSpeed.js";
import { arcPath } from "./pathMovement.js";

export function uploadStart(lastNow, lastKBytes, xhr) {
    xhr.upload.addEventListener("progress", function(e) {
        if (e.lengthComputable) {
            let mbps = calculateSpeed(e, lastKBytes, lastNow);
            arcPath(mbps);
            sessionStorage.setItem("uploadSpeed", mbps);
        }
    }, false);
}