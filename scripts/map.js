import { displayIpInfos, getApiInfos } from './data.js';

let mapOptions = {
    center: [48.866667, 2.333333],
    zoom: 2,
    zoomControl: false
}

let map = L.map('map', mapOptions);

let zoom = L.control.zoom({
    position: 'bottomleft'
}).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '<a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

async function test() {
    const submitBtn = document.querySelector('#button-search-ip');

    submitBtn.addEventListener('click', async () => {
        const inputValue = document.querySelector('#search-ip').value;

        const data = await getApiInfos(inputValue);
        console.log(data);

        const lat = data.location.lat;
        const lng = data.location.lng;

        displayIpInfos(data);
        L.marker([lat, lng]).addTo(map)
        map.setView([lat, lng], 12);
    })
}

test();