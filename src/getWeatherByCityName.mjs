import getWeatherByLocation from "./getWeatherByLocation.mjs";

async function getWeatherByCityName(rl) {
    try {
        const cityName = await rl.question('ENTER THE CITY NAME: ');
        console.log("Loading weather data.....")
        const location = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=0e103eeafaec0c224a863c546ac6d304`);
        const locData = await location.json();
        //console.log(locData);
        if (!locData.length) {
            console.log("City not found!");
            return;
        }

        const { lat, lon, state: country } = locData[0];
        await getWeatherByLocation(lat, lon);
    } catch (err) {
        console.error("Error Occured:", err.message);
    }
}
export default getWeatherByCityName;