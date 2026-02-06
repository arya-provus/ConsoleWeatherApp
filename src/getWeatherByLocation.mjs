import globalStates from "../utils/globalStates.mjs";
//fetching weather details with latitude and Longitude
async function getWeatherByLocation(lat, lon) {
    try {
        const latitude=lat || globalStates.lat;
        const longitude=lon || globalStates.lon;
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0e103eeafaec0c224a863c546ac6d304&units=metric`);
        const res = await weatherResponse.json();
        //console.log(res);
        const { name: cityName,
            weather: [{ description }],
            main: { temp, humidity },
            wind: { speed }
        } = res;

        console.log(`\n Result for ${cityName}`);
        console.log(`Temp: ${temp}°C  `);
        console.log(`Condition: ${description}`);
        console.log(`Wind: ${speed}  `);
        console.log(`Humidity: ${humidity}`);
    }
    catch (err) {
        console.log("Problem in fetching weather details with latitude and longitude \n Check your input and try again!")
    }
}

export default getWeatherByLocation;