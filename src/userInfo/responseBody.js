export const body = {
    id: "",
    userId: localStorage.getItem("userId"),
    ip: sessionStorage.getItem("ip"),
    isp: sessionStorage.getItem("isp"),
    location: sessionStorage.getItem("location"),
    downloadSpeed: Number(sessionStorage.getItem("downloadSpeed")),
    uploadSpeed: Number(sessionStorage.getItem("uploadSpeed")),
    date: new Date().toISOString(),
}