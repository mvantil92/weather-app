window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescriptions  = document.querySelector('.temperature-description');
    let temperatureDegree  = document.querySelector('.temperature-degree');
    let locationTimezone = document.getElementById('local-timezone');
    let weathericon_span = document.getElementById('weather-icon');
    let imgSrc = document.querySelector("weather_icon");


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `http://api.weatherstack.com/current?access_key=a111a86ff28bc9407fdb98a3b0655635&query=${lat},${long}`;

            fetch(api)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data);
                const {temperature, weather_descriptions} = data.current;
                const {timezone_id} = data.location;
                const {weather_icons} = data.current;
                temperatureDegree.textContent = (temperature * 1.8) + 32;
                temperatureDescriptions.textContent = weather_descriptions[0];
                locationTimezone.textContent = timezone_id;
                weathericon_span.src = weather_icons;
                
            });
        });

        





    } 
});


