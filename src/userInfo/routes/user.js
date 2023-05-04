export function postUser(body) {
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