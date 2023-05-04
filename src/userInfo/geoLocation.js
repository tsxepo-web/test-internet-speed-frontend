import { showPosition } from "./userCoordinates.js";

async function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }else {
        alert("Geo location is not supported by this browser.");
    }
}
getLocation();