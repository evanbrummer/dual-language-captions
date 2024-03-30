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
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);

    let serviceUrl = tab.url.split('/')[2]; // index 2, on account of https:// ... /

    document.getElementById("services").innerHTML = `<li>${serviceUrl} (${SUPPORTED_STREAMERS.includes(serviceUrl)})</li>`;
}
identifyCurrentService();


/**
 * ---- STORIES ----
 * CLICKED:
 * 1) check what service they have open
 * 2) it's not recognized/supported
 * 3) message: not supported, click here for supported streaming services
 * 
 * 
 * CLICKED:
 * 1) check what service they have open
 * 2) it's recognized (disney, netflix, whatever)
 * 3) app name and favico shown on ext with a toggle switch to "Select multiple languages"
 *      - maybe an extra checkbox to "automatically set text to smallest option"
 * 4) opening the CC/subtitles menu of the player looks and functions the same, but you can check/select more than one
 *      - they will show vertically in the order selected, and maybe be marked as (1) English ... (2) Spanish
 *      - "Are you not entertained?"
 *      - "¿No estás entretenido?"
 * 
 * the devil's in the details 
 */