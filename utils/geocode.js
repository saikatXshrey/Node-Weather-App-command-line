const request = require('request');

const geocode = (address, callback) => {
    const location_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2Fpa2F0eHNocmV5IiwiYSI6ImNrcHJ3cDQ0NzBiYWgycXA4NW53dGIzdjQifQ.NASg72RH5BGwOFLBTU6LvA&limit=1';

    request({ url: location_url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the geolocation services!');
        } else if (body.message) {
            callback('No location specified!');
        }
        else if (body.features.length == 0) {
            callback('Uable to decode location! Try another one');
        } else {
            const lat = body.features[0].center[1];
            const lon = body.features[0].center[0];
            callback(undefined, {
                latitude: lat,
                longitude: lon,
                location: body.features[0].place_name,
            });
        }
    });
};

module.exports = geocode;