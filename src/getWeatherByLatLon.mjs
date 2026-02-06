import getWeatherByLocation from "./getWeatherByLocation.mjs";


async function getWeatherByLatLong(rl) {
    try {
        const lat = await rl.question(`Enter the Latitude: \n`);
        const lon = await rl.question(`Enter the longitude: \n`);
        console.log("Fetching weather data using Latitude and Longitude you entered... ");
        await getWeatherByLocation(lat, lon);
    }
    catch (err) {
        console.log(`Enter correct Latitude and Longitude \n Enter only numerical value, don't enter symbols`);
    }

}
export default getWeatherByLatLong;