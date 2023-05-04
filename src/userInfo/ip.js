function getIP() {
    fetch("https://ipgeolocation.abstractapi.com/v1/?api_key=d5cac7efc1f849d8b2d4d9c9106187b8")
    .then(res => res.json())
    .then((result) =>{
        document.querySelector(".ip-address").innerHTML = result.ip_address;
        document.querySelector(".isp").innerHTML = result.connection.isp_name;
        sessionStorage.setItem("ip", result.ip_address);
        sessionStorage.setItem("isp", result.connection.isp_name);
    })
    .catch((error) => {
        console.log("Error: ", error);
    });
}
getIP();