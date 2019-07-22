const geocode = require("./utils/geocode");
const forcast = require("./utils/forcast");

const cityName = process.argv[2];
if (!cityName) {
  console.log("Please enter a city name");
} else {
  geocode(cityName, (error, response) => {
    if (error) {
      return console.log("error:" + error);
    } else {
      const { longitude, latitude, location } = response;

      forcast(longitude, latitude, (error, data) => {
        if (error) {
          return console.log(error);
        }

        const temperature = data.temperature;
        console.log(
          `The current temperature in ${location} is ${temperature} degree`
        );
      });
    }
  });
}
