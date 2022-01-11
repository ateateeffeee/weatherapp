//console.log('logic');

const dom = require('./dom.js');

const logic = (() => {

    const init = function() {
        console.log('logic init');
        this.getData('London');
        //dom.createCards(); RUN THIS IN GETDATA??
    }
    
    /*
    const logData = function() {
        
        async function getData() {
            const response = await fetch('api.openweathermap.org/data/2.5/weather?q=London',{mode: 'cors'});
            const weatherData = await response;
            console.log(weatherData);
        }
        getData();
        
    }
    */

    const getData = async function(city) {
        //getTemp(city);

        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=f586ade79371e87113e2f9abf57f8fbc',{mode: 'cors'});
        const weatherData = await response.json();

        //const response2 = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=f586ade79371e87113e2f9abf57f8fbc',{mode: 'cors'});
        //LEFT OFF HERE. USE AWAIT TO MAKE RETURNS WORK
        //send ALL variables to createCards. put at the end of
        //this function

        //Execute data parsing functions and assign to variables
        let temp = await getTemp(weatherData);
        let high = await getHigh(weatherData);
        let low = await getLow(weatherData);
        let feelsLike = await getFeelsLike(weatherData);

        dom.createCards(temp, high, low, feelsLike);
        
        //Execute getFeelsLike
        //getFeelsLike(weatherData);

        //Execute getHumidity
        getHumidity(weatherData);

        //Execute getHigh
        //getHigh(weatherData);

        //Execute getLow
        //getLow(weatherData);
        

        //Execute getHourlyData
        getHourlyData(weatherData.coord.lat, weatherData.coord.lon);
        
        //Execute getPrecip
        //getPrecip(weatherData.coord.lat, weatherData.coord.lon);

        //Execute getSky
        //getSky(weatherData.coord.lat, weatherData.coord.lon);

        //getPrecip(oneCallData);
        //console.log(weatherData);
        //console.log(weatherData.main.temp);
    }

    const getHourlyData = async function(lat, lon) {
        const response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+ lat + '&lon=' + lon + '&appid=f586ade79371e87113e2f9abf57f8fbc',{mode: 'cors'});
        const weatherData = await response.json();

        getPrecip(weatherData);

        getSky(weatherData);
    }

    const getTemp = async function(weatherData) {
        console.log('TEMP: ');
        console.log(weatherData.main.temp);

        let temp = weatherData.main.temp;

        let fahrenheit = kelvinToFahrenheit(temp);

        return fahrenheit
    }

    const getPrecip = async function(weatherData) {
        console.log('PRECIP: ')
        console.log(weatherData.hourly[1].pop);

        return weatherData.hourly[1].pop
    }

    const getSky = async function(weatherData) {
        console.log('SKY: ');
        console.log(weatherData.hourly[1].weather[0].description);

        return weatherData.hourly[1].weather[0].description
    }

    const getFeelsLike = async function(weatherData) {
        console.log('FEELS LIKE: ');
        console.log(weatherData.main.feels_like);

        return weatherData.main.feels_like
    }

    const getHumidity = async function(weatherData) {
        console.log('HUMIDITY: ');
        console.log(weatherData.main.humidity);

        return weatherData.main.humidity
    }

    const getHigh = async function(weatherData) {
        console.log('HIGH: ');
        console.log(weatherData.main.temp_max);

        return weatherData.main.temp_max
    }

    const getLow = async function(weatherData) {
        console.log('LOW: ');
        console.log(weatherData.main.temp_min);

       return weatherData.main.temp_min
    }

    const kelvinToFahrenheit = function(kelvin) {
        let fahrenheit = ((kelvin - 273.15) * (9/5)) + 32;
        //LEFT OFF HERE. DO THIS FOR ALL OF EM
        return fahrenheit.toFixed(2);
    }



    const getUserInput = function() {
        //left off here
        //this will be triggered by static listener
        let cityField = document.getElementById('cityField');
    }

    
    

    return {
        init,
        getData,
        /*
        getUserInput,
        getPrecip,
        getFeelsLike,
        getHumidity,
        getHigh,
        getLow,
        getSky,
        */


    }


})();

module.exports = logic;