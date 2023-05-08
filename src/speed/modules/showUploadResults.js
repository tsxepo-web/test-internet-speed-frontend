export function showResults(kbps, mbps) {
    if(mbps >= 1) {
        document.querySelector('.textBox').innerHTML = mbps.toFixed(3) + 'Mbps';
    }else {
        document.querySelector('.textBox').innerHTML = kbps.toFixed(3) + 'Kbps';
    }
}