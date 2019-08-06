class Weather {
    constructor(city) {
        this.apiKey = 'eabf344a71e9d20cf8bee1bd579e82f7';
        this.city = city;
        this.countryCode = this.countryCode;

    }

    // Fetch Weather from API
    async getWeather() {
        const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&APPID=${this.apiKey}`);

        const responseData = await response.json()

        return responseData;
    }

    // Change Weather Location

    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }


}