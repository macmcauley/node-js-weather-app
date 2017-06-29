let request = require('request');

let apiKey = 'afa5efe91af4620bea6d3635173dcd6d';
let city = 'london';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});