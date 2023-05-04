import { showPosition } from "./userCoordinates";

async function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }else {
        alert("Geo location is not supported by this browser.");
    }
}
showPosition(position);
getLocation();