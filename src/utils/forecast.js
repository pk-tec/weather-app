const request = require("request");

const forecast = (lat, long, callback) => {
	const url = `http://api.weatherstack.com/current?access_key=68d12d6d97ca2db76cf5da5f169be9da&query=${lat},${long}&units=f`;

	request({ url, json: true }, (err, { body }) => {
		console.log(body.current);
		const resDec = body.current.weather_descriptions;
		const resTemp = body.current.temperature;
		const rainChance = body.current.precip;
		const windSpeed = body.current.wind_speed;
		const humidity = body.current.humidity;
		const feelsLike = body.current.feelslike;
		const isDay = body.current.is_day;
		const uvIndex = body.current.uv_index;
		const pressure = body.current.pressure;
		const visibility = body.current.visibility;
		const windDir = body.current.wind_dir;
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
				`${resDec}: It is currently ${resTemp}°C out.
				There is ${rainChance}% of rain, 
				Humidity: ${humidity}%, 
				Feels Like: ${feelsLike}°C, 
				Wind Speed: ${windSpeed},
				is Day: ${isDay},
				UV Index: ${uvIndex},
				Pressure: ${pressure},
				Visibility: ${visibility},
				Wind Direction: ${windDir}`,
			);
		}
	});
};

module.exports = forecast;
