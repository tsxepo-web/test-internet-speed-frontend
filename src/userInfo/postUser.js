import { body } from "./responseBody.js";

export async function postData() {
    const uploadSpeed = sessionStorage.getItem("uploadSpeed");
    const downloadSpeed = sessionStorage.getItem("downloadSpeed");
      
        if (uploadSpeed && downloadSpeed) {
          const body = {
            id: "",
            userId: localStorage.getItem("userId"),
            ip: sessionStorage.getItem("ip"),
            //isp: sessionStorage.getItem("isp"),
            isp: "Rain",
            location: sessionStorage.getItem("location"),
            downloadSpeed: Number(sessionStorage.getItem("downloadSpeed")),
            uploadSpeed: Number(sessionStorage.getItem("uploadSpeed")),
            date: new Date().toISOString(),
    };

    fetch("https://network-speed-test.azurewebsites.net/user", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json", 
        },
        body: JSON.stringify(body),
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
    }
}