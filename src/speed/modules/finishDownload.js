import { upload } from "../upload.js";

export function downloadEnd(xhr) {
    xhr.onload = () => {
        document.querySelector("#download").innerHTML = sessionStorage.getItem("downloadSpeed") + "Mbps";
        document.querySelector('#upload').innerHTML = "Checking...";
        upload();
    }
}