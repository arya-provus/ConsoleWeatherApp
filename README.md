The Project is Implementation of the Javascript concepts I learnt till now
It includes the implementation of Promises, handling promises with async and await, handling errors with help of try catch block and much more
Following points show that which JS concepts are used for implementing specific functionalities in the app:
  1. Accepting the user Input: readline module library that allows user to input his data {it awaits as accepting user data is asynchronous operation}
  2. Accepting input and Output from standard input and output devices: <const { stdin: input, stdout: output } = require('node:process');>
  3. For running the weather app: Asynchronous function function runWeatherApp()
  4. For fetching weather details with city as a input: asynchronous function fetchWeather()
  5. For fetching weather details with latitude and Longitude: asynchronous functions getWeatherByLatLong() and getWeatherByLocation()
  6. For fetching current location weather details with help of IP adress: asynchronous function getWeatherUsingIP()
  7. Handling promises in asyncronous function: await keyword
  8. Handling errors: try-catch blocks
  9. Exit from Application: while statement and a boolean variable
