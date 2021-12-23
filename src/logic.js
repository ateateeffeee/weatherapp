//console.log('logic');

const logic = (() => {

    const init = function() {
        console.log('logic init');
        this.getData('London');
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

        //LEFT OFF HERE
        //Figure out how to create dom with logic info
        
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=f586ade79371e87113e2f9abf57f8fbc',{mode: 'cors'});
        const weatherData = await response.json();
        getTemp(weatherData);
        //console.log(weatherData);
        //console.log(weatherData.main.temp);
    }

    const getTemp = async function(weatherData) {
        console.log(weatherData.main.temp);
    }

    const getUserInput = function() {
        //left off here
        //this will be triggered by static listener
        let cityField = document.getElementById('cityField');
    }
    

    return {
        init,
        getData,
        getUserInput,
        /*
        getFeelsLike,
        getHumidity,
        getHigh,
        getLow,
        getSky,
        getPrecip,
        */


    }


})();

module.exports = logic;