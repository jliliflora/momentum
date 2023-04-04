function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("you live it");
    console.log(position);
}
function onGeoError() {
    alert("Can't find you. No wather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError) //브라우저에서 알아서 위치좌표를 주는 내장함수,, 같은거임! WIFI, GPS, 위치 등등 정보제공해줌