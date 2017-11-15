
var NodeGeocoder = require('node-geocoder');

var options = {
  provider: 'google',

  // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey: 'AIzaSyD3x3ddhAIdE_XjonRjXvCOpMFtuHF5n5w', // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};

var geocoder = NodeGeocoder(options);


// Or using Promise
geocoder.geocode('29 champs elysée paris')
  .then(function(res) {
    return res;
  })
  .catch(function(err) {
    console.log(err);
  });