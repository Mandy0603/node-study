const request = require("request");
const keys = require("../config/keys");

const forcast = (longitude, latitude, callback) => {
  const urlSearch = `https://api.darksky.net/forecast/${
    keys.darkSkyKeys
  }/${latitude},${longitude}?units=si`;

  request({ url: urlSearch, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to services", undefined);
    } else if (response.body.error) {
      callback("The given location is invalid", undefined);
    } else {
      callback(
        undefined,
        "The current temperature is " + response.body.currently.temperature
      );
    }
  });
};

module.exports = forcast;
