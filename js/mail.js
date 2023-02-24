const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://privatix-temp-mail-v1.p.rapidapi.com/request/delete/id/%7Bmail_id%7D/',
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'privatix-temp-mail-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});