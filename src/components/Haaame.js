var axios = require("axios").default;

var options = {
  // method: 'GET',
  headers: {
   
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

