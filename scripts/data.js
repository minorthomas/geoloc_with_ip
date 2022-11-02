export function displayIpInfos(data) {
    const list = document.querySelector('.homemain_list');

    const displayError = `
        <li>
            <h2>IP ADDRESS</h2>
            <p id="ipaddress">-- --</p>
        </li>
        <li>
            <h2>LOCATION</h2>
            <p id="location">-- --</p>
        </li>
        <li>
            <h2>TIMEZONE</h2>
            <p id=" timezone">-- --</p>
        </li>
        <li>
            <h2>ISP</h2>
            <p id="isp">-- --</p>
        </li>
    `

    if (!data) {
        return list.innerHTML = displayError;
    }

    const displayInDom = `
        <li>
            <h2>IP ADDRESS</h2>
            <p id="ipaddress">${data.ip}</p>
        </li>
        <li>
            <h2>LOCATION</h2>
            <p id="location">${data.location.country} ${data.location.region}</p>
        </li>
        <li>
            <h2>TIMEZONE</h2>
            <p id=" timezone">UTC ${data.location.timezone}</p>
        </li>
        <li>
            <h2>ISP</h2>
            <p id="isp">${data.isp}</p>
        </li>
    `

    list.innerHTML = displayInDom;
}

export async function getApiInfos(ip) {
    const api = `https://geo.ipify.org/api/v2/country,city?apiKey=at_FJQQhOjHGm1g3s9hOhUaIkYrETeN7&ipAddress=${ip}`;
    const data = await fetch(api, {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    })
        .then(res => {
            if (res.ok) {
                return res.json() 
            } else {
                throw new Error(' ', {cause: res})
            }
        })
        .then(result => result)
        .catch(err => console.log('Une erreur est survenue', err));
    
    return data;
}