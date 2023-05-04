import { postUser } from "./routes/user.js";

export async function postData() {
    const uploadSpeed = sessionStorage.getItem("uploadSpeed");
    const downloadSpeed = sessionStorage.getItem("downloadSpeed");
        if (uploadSpeed && downloadSpeed) {
          const body = {
            id: "",
            userId: localStorage.getItem("userId"),
            ip: sessionStorage.getItem("ip"),
            isp: sessionStorage.getItem("isp"),
            location: sessionStorage.getItem("location"),
            downloadSpeed: Number(sessionStorage.getItem("downloadSpeed")),
            uploadSpeed: Number(sessionStorage.getItem("uploadSpeed")),
            date: new Date().toISOString(),
        };
    postUser(body);
    }
}