const SUPPORTED_STREAMERS = [
    "www.netflix.com",
    "www.amazon.com",
    "www.disneyplus.com",
    "www.hulu.com",
    "play.max.com",
    "www.paramountplus.com",
    "tv.apple.com",
    "www.peacocktv.com",
    "www.youtube.com",
    "tv.youtube.com"
]

async function fetchData() {
    const services = ['Disney+', 'Max', 'Hulu'];
    console.log("test");

    document.getElementById("services").innerHTML = services.map(service => `<li>${service}</li>`).join('');
}

async function identifyCurrentService() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);

    let serviceUrl = tab.url.split('/')[2]; // on account of https://

    document.getElementById("services").innerHTML = `<li>${serviceUrl} (${SUPPORTED_STREAMERS.includes(serviceUrl)})</li>`;
}
identifyCurrentService();