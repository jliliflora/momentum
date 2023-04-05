const API_KEY = "ce785cba3bc0a9dab5e3ee8c1de58740";
const noti = document.querySelector("#weather .weather-noti");
const weather = document.querySelector("#weather .temp");
const city = document.querySelector("#weather .city");
const icon = document.querySelector("#weather .icon");

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    // console.log(position, lat, lng);
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    //console.log(url);
    
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        noti.classList.add("hidden");

        city.innerText = data.name;
        weather.innerText = `${data.main.temp}°`;

        const weatherIcon = data.weather[0].icon;
        const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

        console.log(weatherIcon);
        console.log(weatherIconAdrs);

        icon.setAttribute('src', weatherIconAdrs);


    });
}

function onGeoError() {
    alert("Can't find you. No wather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError) //브라우저에서 알아서 위치좌표를 주는 내장함수,, 같은거임! WIFI, GPS, 위치 등등 정보제공해줌