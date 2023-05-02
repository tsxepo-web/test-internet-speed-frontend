async function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        

    }else {
        alert("Geo location is not supported by this browser.");
    }
}

async function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyCJ4rCWhrOeoUreruAOkLtytu8A_9PFRJM`)
    .then(res => res.json())
    .then(address => {
        console.log(address.results);
        sessionStorage.setItem("location", address.results[0].address_components[2].long_name);
    })
    
}
getLocation();

