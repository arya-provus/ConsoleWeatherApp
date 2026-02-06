import getWeatherUsingIP from "../utils/getWeatherByIP.mjs";
import getPlacesToVisit from "./getPlacesToVisit.mjs";
import getWeatherByCityName from "./getWeatherByCityName.mjs";
import getWeatherByLatLong from "./getWeatherByLatLon.mjs";
import getWeatherByLocation from "./getWeatherByLocation.mjs";

async function start(rl) {
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
        console.log("4. Planning to visit the location? ");

        const choice = await rl.question("Enter choice number: ");

        switch (choice) {
            case "0":
                endLoop = true;
                break;
            case "1":
                await getWeatherByCityName(rl);
                break;
            case "2":
                await getWeatherByLatLong(rl);
                break;
            
            case "3":
                await getWeatherUsingIP();
                await getWeatherByLocation();
                break;
            
            case "4":
                await getWeatherUsingIP();
                await getPlacesToVisit(rl);
                break;

            default:
                console.log("Choose correct option: ");
        }
    }
    console.log("EXIT FROM APP");
    rl.close();
}

export default start;