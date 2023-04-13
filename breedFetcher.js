const request = require('request');

const input = process.argv[2].trim().toLowerCase();

request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, function(err, response, body) {
  if (err) console.log("Sorry, cannot find this information. Details as follows: \n" + err);
  const data = JSON.parse(body);
  console.log(data[0].description);
});
