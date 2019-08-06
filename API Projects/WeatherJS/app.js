// Init Classes

const weather = new Weather(city, countryCode);


weather.getWeather()
    .then(results => {
        console.log(results);
    })
    .catch(err => console.log(err))