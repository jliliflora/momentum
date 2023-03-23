const clock = document.querySelector("h2#clock");
/*
function sayHello() {
    console.log("hello");
}

setInterval(sayHello, 5000); -> 매 5초마다
setTimeout(sayHello, 5000); -> 5초 후
*/

function getClock() {
    const date = new Date();
    // clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` // 백틱으로 해야하는 것을 명심하쟈

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock(); //-> website가 로드 되자마자 보여야하기때문에 getClock()을 먼저 호출시키고 또 매초마다 다시 실행되도록 한다
setInterval(getClock, 1000);