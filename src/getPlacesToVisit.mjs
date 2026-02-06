import globalStates from "../utils/globalStates.mjs";


async function getPlacesToVisit(rl) {
    console.log("1. fetch places using latitude longitude");
    console.log("2. fetch places using current location");
    const choose = await rl.question("enter your choice: ");
    if (choose == "1") {
        const lat = await rl.question(`Enter the Latitude: \n`);
        const lon = await rl.question(`Enter the longitude: \n`);
        console.log("Fetching places using Latitude and Longitude you entered... ");
        const getPlaces = await fetch(`https://api.geoapify.com/v2/places?categories=tourism.attraction&filter=circle:${lon},${lat},5000&limit=5&apiKey=4056c4f5ad914a28ae2d4eebbcb7179e`)
        const getContent = await getPlaces.json();
        const placeNames = getContent.features.map(feature => feature.properties.name)
        console.log("Places to visit at this location: ");
        console.log(placeNames);
    }

    else if (choose == 2) {
        const { city, country, lat, lon } = globalStates;
        console.log(`Location found: ${city}, ${country} (${lat}, ${lon}) \n Loading places to Visit.......`);
        const getPlaces = await fetch(`https://api.geoapify.com/v2/places?categories=tourism.attraction&filter=circle:${lon},${lat},5000&limit=5&apiKey=4056c4f5ad914a28ae2d4eebbcb7179e`)
        const getContent = await getPlaces.json();
        const placeNames = getContent.features.map(feature => feature.properties.name)
        console.log("Places to visit at this location: ");
        console.log(placeNames);
    }
}

export default getPlacesToVisit;