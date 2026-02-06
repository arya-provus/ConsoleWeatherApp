const readline = require('node:readline/promises');
 // this is node library that allows user to input his data {it awaits as accepting user data is asynchronous operation}

const { stdin: input, stdout: output } = require('node:process');//the input is being taken from keyboard and op from screen

const rl =  readline.createInterface({ input, output });//rl is the object that we will use to take the input from user



async function runWeatherApp() {
    console.log(" WEATHER APP ");
    let endLoop = false;

    while (!endLoop) {
        let ans = await rl.question("Do you want to continue? (yes/no): ");
        if (ans.toLowerCase() !== 'yes' && ans.toLowerCase() !== 'no') {
            console.log("Enter either yes or no ")
            continue;
        }
        if (ans.toLowerCase() !== 'yes') {
            endLoop = true;
            break;
        }

        console.log("\nMENU:");
        console.log("0. END");
        console.log("1. Fetch weather by City");
        console.log("2. Manually enter Latitude and Longitude of a Location");
        console.log("3. Fetch weather by Current Location");

        const choice = await rl.question("Enter choice number: ");

        switch (choice) {
            case "0":
                endLoop = true;
                break;
            case "1":
                await fetchWeather(); 
                break;
            case "2":
                await getWeatherByLatLong();
                break;
            case "3":
                await getWeatherUsingIP(); 
                break;
            
            default:
                console.log("Choose correct option: ");
        }
    }
    console.log("EXIT FROM APP");
    rl.close();
}

runWeatherApp();







//fetching weather details with city as a input
async function fetchWeather() {
    try {
        const cityName = await rl.question('ENTER THE CITY NAME: ');
        const location = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=0e103eeafaec0c224a863c546ac6d304`);
        const locData = await location.json();
        //console.log(locData);
        if (!locData.length) {
            console.log("City not found!");
            return;
        }

        const { lat, lon, state: country } = locData[0];
        await getWeatherByLocation(lat,lon);
    } catch (err) {
        console.error("Error Occured:", err.message);
    }
}


async function getWeatherByLocation(lat,lon){
    try{
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0e103eeafaec0c224a863c546ac6d304&units=metric`);
        const res = await weatherResponse.json();
        //console.log(res);
        const { name:cityName,
            weather: [ { description } ], 
            main: { temp, humidity },      
            wind: { speed }
        } = res;

        console.log(`\n Result for ${cityName} \n`);
        console.log(`Temp: ${temp}°C  `);
        console.log(`Condition: ${description}\n`);
        console.log(`Wind: ${speed}  `);
        console.log(`Humidity: ${humidity}`);
    }
    catch(err){
        console.log("Problem in fetching weather details with latitude and longitude \n Check your input and try again!")
    }
}

async function getWeatherUsingIP() {
    try {
        console.log("Fetching your location with IP address......");
        const response = await fetch("http://ip-api.com/json/");
        const data = await response.json();
        //console.log(data);
        let city=data['city'];
        // console.log(city);
        let country=data['country'];
        let lat=data['lat'];
        let lon=data['lon'];
        console.log(`Your current location: ${city},${country},${lat},${lon})\n`);
        await getWeatherByLocation(await lat,await lon);
    } catch (err) {
        console.log("IP location not found.");
    }
}

async function getWeatherByLatLong(){
   try{
        const lat=await rl.question(`Enter the Latitude: \n`);
        const lon=await rl.question(`Enter the longitude: \n`);
        console.log("Fetching weather data using Latitude and Longitude you entered... ");
        await getWeatherByLocation( lat,lon);
   }
   catch(err){
    console.log(`Enter correct Latitude and Longitude \n Enter only numerical value, don't enter symbols`);
   }

}
