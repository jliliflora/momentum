const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; 
// 반복되는 string들은 대문자 변수로 저장해놓는 것이 좋다. 오타나 실수가 났을때 변수명의 오타는 자바스크립트라 감지해주기 떄문!!!

// 3단계
function onLoginSubmit(event) {
    event.preventDefault(); //-> event가 원래하는 행동을 멈춰준다.
    loginForm.classList.add(HIDDEN_CLASSNAME); //-> form을 다시 숨긴다.
    const username = loginInput.value; //->username이라는 변수로 value를 저장한다.
    localStorage.setItem(USERNAME_KEY, username); //-> username값을 username이라는 key와 함께 local storage에 저장한다.
    paintGreetings(username); //-> 함수 호출! / 유저정보가 input으로부터 오고있음
}


/*
const link = document.querySelector("a");

function handleLinkClick(event) {
    event.preventDefault(); // 기본동작을 막는 코드
    console.dir(event); // event 내부를 보는 코드
}

link.addEventListener("click", handleLinkClick);
*/


// 4단계
// 비어있는 h1 요소 안에 `hello ${username}`이라는 텍스트를 추가해줌
function paintGreetings(username) {
    // greeting.innerText = "HELLO " + username;
    greeting.innerText = `Hello ${username}`; // 변수명과 string을 함께 사용해야할때 니꼬는 이걸 선호한디야 변수명을 사용할때는 ${} => 이 규칙만 따라주면 됨
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


// 1단계 -> 자바스크립트가 local storage를 확인함
const savedUsername = localStorage.getItem(USERNAME_KEY); 

// 2단계
//localStorage에 유저 정보 유무 확인
if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); 
    //이렇게 'onLoginSubmit' 이름만 적어놔야 event가 발생했을때에만 해당 function을 실행시킨다!
    //onLoingSubmit(); => (), 이 괄호를 더하면 브라우저가 보자마자 자동으로 이 function을 실행시켜버린다.

} else {
    // show the greetings
    paintGreetings(savedUsername); // 유저정보가 local storage로부터 옴
}