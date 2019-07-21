const request = require("request");
const keys = require("./config/keys");

const url = `https://api.darksky.net/forecast/${
  keys.darkSkyKeys
}/37.8267,-122.4233`;
const url2 = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${
  keys.mapBoxKeys
}`;

request({ url: url, json: true }, (error, response) => {
  console.log(response.body.currently);
});

request({ url: url2, json: true }, (error, response) => {
  console.log(response.body.features[0].center);
});
