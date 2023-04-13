const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(err, response, body) {
    if (err) {
      return callback(err, null);
    };
    const data = JSON.parse(body);
    if (data.message) {
      return callback(null, data.message);
    }
    if (data.length === 0) {
      return callback(null, "breed not found.");
    }
    return callback(null, data[0].description);
  });
};

module.exports = fetchBreedDescription