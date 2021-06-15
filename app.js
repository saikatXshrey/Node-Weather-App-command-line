const chalk = require('chalk');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (address) {
    geocode(address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            console.log(chalk.red.bold(error));
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                console.log(chalk.red.bold(error));
            }

            console.log(chalk.blue.bold(location));
            console.log(chalk.bold.red.italic(forecastData));
        });
    });
} else {
    console.log('No location specified! Please provide an address');
}