import globalStates from "./globalStates.mjs";

async function getWeatherUsingIP() {
    try {
        console.log("Fetching your location with IP address......");
        const response = await fetch("http://ip-api.com/json/");
        const { city, country, lat, lon }= await response.json();
        globalStates.lat=lat;
        globalStates.lon=lon;
        globalStates.city=city;
        globalStates.country=country;
    } catch (err) {
        console.log("IP location not found.");
    }
}

export default getWeatherUsingIP;