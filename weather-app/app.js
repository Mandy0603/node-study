const request = require("request");

const url =
  "https://api.darksky.net/forecast/f5668a8c93b42c0dbc654e5883e9e931/37.8267,-122.4233";
const url2 =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWFuZHltYSIsImEiOiJjanljaDNuNWowaW0yM25rNHBwczBrOWZlIn0.CZiMKMQFz3GwBRajPDXUGQ";

request({ url: url, json: true }, (error, response) => {
  console.log(response.body.currently);
});

request({ url: url2, json: true }, (error, response) => {
  console.log(response.body.features[0].center);
});
