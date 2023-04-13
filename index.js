const fetchBreedDescription = require('./breedFetcher');
const input = process.argv[2].trim().toLowerCase();

fetchBreedDescription(input, (error, description) => {
  if (error) {
    return console.log('Error fetch details: ', error);
  }
  console.log(description);
});

module.exports = fetchBreedDescription;