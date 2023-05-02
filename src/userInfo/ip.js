
function getIP() {
    fetch("http://ip-api.com/json")
    .then(res => res.json())
    .then((result) =>{
        document.querySelector(".ip-address").innerHTML = result.query;
        document.querySelector(".isp").innerHTML = result.isp;
        sessionStorage.setItem("ip", result.query);
        sessionStorage.setItem("isp", result.isp);
    })
    .catch((error) => {
        console.log("Error: ", error);
    });
    }
    
    getIP();