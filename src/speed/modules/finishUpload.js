import { postData } from "../../userInfo/postUser.js";

export function uploadEnd(xhr) {
    xhr.onload = () => {
        postData();
        document.querySelector("#upload").innerHTML = sessionStorage.getItem("uploadSpeed") + "Mbps";
    }
}