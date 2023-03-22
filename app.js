const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; 
// 반복되는 string들은 대문자 변수로 저장해놓는 것이 좋다. 오타나 실수가 났을때 변수명의 오타는 자바스크립트라 감지해주기 떄문!!!


function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);

    console.log(username);
}



// const link = document.querySelector("a");

/*
function handleLinkClick(event) {
    event.preventDefault(); // 기본동작을 막는 코드
    console.dir(event); // event 내부를 보는 코드
}*/

// link.addEventListener("click", handleLinkClick);




//localStorage에 유저 정부 유무 확인

function paintGreetings(username) {
    // greeting.innerText = "HELLO " + username;
    greeting.innerText = `Hello ${username}`; // 변수명과 string을 함께 사용해야할때 니꼬는 이걸 선호한디야 변수명을 사용할때는 ${} => 이 규칙만 따라주면 됨
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // 1단계 -> 자바스크립트가 local storage를 확인함

// 2단계
if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); 
    //이렇게 'onLoginSubmit' 이름만 적어놔야 event가 발생했을때에만 해당 function을 실행시킨다!
    //onLoingSubmit(); => (), 이 괄호를 더하면 브라우저가 보자마자 자동으로 이 function을 실행시켜버린다.

} else {
    // show the greetings
    paintGreetings(savedUsername);
}

console.log(savedUsername);