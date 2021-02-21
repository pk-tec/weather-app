const request = require("request");

const forecast = (lat, long, callback) => {
	const url = `http://api.weatherstack.com/current?access_key=68d12d6d97ca2db76cf5da5f169be9da&query=${lat},${long}&units=f`;

	request({ url, json: true }, (err, { body }) => {
		const resDec = body.location.name;
		const resTemp = body.current.temperature;
		const rainChance = body.current.precip;
		if (err) {
			callback("Unable to connect to the location", undefined);
		} else if (body.err) {
			callback(
				"Unable to find location, Please Provide correct longitude and longitude",
				undefined,
			);
		} else {
			callback(
				undefined,
				`${resDec}: It currently ${resTemp} degree out. Chance of rain is ${rainChance}%`,
			);
		}
	});
};

module.exports = forecast;
