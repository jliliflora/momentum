const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

const toDos = []; // 여기서 항상 초기화를 해주면 새로고침하고 리스트를 추가하면 덮어쓰여지게되는것!

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo() {
    const li = event.target.parentElement; // parentElement를 가져오는 이유는 li태그까지 다 지워버려야하기 때문!
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit() {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/*
function sayHello(item) {
    console.log("this is the trun of", item);
} //parsedToDos의 item을 가지고 오는거임 내장되어있는 파라미터?라고 봐도 되는듯 submit처럼!
*/

const savedToDos = localStorage.getItem(TODOS_KEY);

console.log(savedToDos);

if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    // console.log(parsedToDos);

    // parsedToDos.forEach(sayHello); 함수 안쓰고 밑에 화살표함수로 짧게 씀!!!
    // parsedToDos.forEach((item) => console.log("this is the turn of", item));
    parsedToDos.forEach(paintToDo);
}