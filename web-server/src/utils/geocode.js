const request = require("request");
const keys = require("../config/keys");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${
    keys.mapBoxKeys
  }`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather services", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location.", undefined);
    } else {
      callback(undefined, {
        longitude: response.body.features[0].center[0],
        latitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
