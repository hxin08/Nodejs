var hostRequest = http.request(requestOptions, function(response) {
	var responseHTML = '';
	response.on('data', function (chunk) {
		responseHTML = responseHTML + chunk;
	});
	response.on('end', function() {
		console.log(responseHTML);
		//do something useful
	});
});