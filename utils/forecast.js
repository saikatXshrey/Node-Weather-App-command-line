const request = require('request');

const forecast = (lat, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4ada1ce211d2e37b8f6c98e18c5b574c&query=' + lat + ',%' + lon;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable connect to weather service!');
        } else if (body.error) {
            callback('Unable to find location');
        }
        else {
            callback(undefined,
                "Condition is " + body.current.weather_descriptions[0] +
                ". Temperature is " + body.current.temperature +
                "°C. It feels like " + body.current.feelslike +
                "°C."
            );
        }
    })
};

module.exports = forecast;