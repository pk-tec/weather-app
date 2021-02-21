const request = require("request");

const geocode = (address, callback) => {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoicHJpdGFta3VtYXIiLCJhIjoiY2trYWVrOG1wMDFydzJ1cG9qcnptcmxzZiJ9.HYQnBl7m_qyAbPxJ8yyXdw`;
	request({ url, json: true }, (err, { body }) => {
		if (err) {
			callback("Unable to connect to the weather service!", undefined);
		} else if (body.features.length === 0) {
			callback("Unable to find the location", undefined);
		} else {
			callback(undefined, {
				latitude: body.features[0].geometry.coordinates[1],
				longitude: body.features[0].geometry.coordinates[0],
				location: body.features[0].place_name,
			});
		}
	});
};

module.exports = geocode;
