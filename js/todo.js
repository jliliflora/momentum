const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = []; // 여기서 항상 초기화를 해주고 있어서 브라우저를 새로고침하고 새로운 투두리스트를 추가하면 이전 것들이 날라가고 덮어쓰여지게 되는것임!

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo() {
    const li = event.target.parentElement; // parentElement를 가져오는 이유는 li태그까지 다 지워버려야하기 때문!
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //toDo의 id는 num, li의 id는 string!! 서로 타입을 맞춰줘야 삭제가 됨
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(button);
    li.appendChild(span);
    
    toDoList.appendChild(li);
}

function handleToDoSubmit() {
    event.preventDefault();
    const newTodo = toDoInput.value; // 1단계
    toDoInput.value = "";

    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    }

    toDos.push(newTodoObj); //toDos에 푸쉬!!
    paintToDo(newTodoObj);
    saveToDos(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/*
function sayHello(item) {
    console.log("this is the trun of", item);
} //parsedToDos의 item을 가지고 오는거임 내장되어있는 파라미터?라고 봐도 되는듯 submit처럼!
*/

const savedToDos = localStorage.getItem(TODOS_KEY);

// console.log(savedToDos);

if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    // console.log(parsedToDos);

    toDos = parsedToDos; //  위에 선언된 toDos가 빈 array이어서 발생하는 문제를 이 코드에서 해결할것임. localStorage에서 발견되는 이전의 toDos들까지 parsedToDos로 집어 넣어주면서 문제해결 완!

    // parsedToDos.forEach(sayHello); 함수 안쓰고 밑에 화살표함수로 짧게 씀!!!
    // parsedToDos.forEach((item) => console.log("this is the turn of", item));
    parsedToDos.forEach(paintToDo);
}