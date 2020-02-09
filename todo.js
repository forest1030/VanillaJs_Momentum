const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const Todos_Ls =  "toDos"

let toDos = []; 

// function filterFn(toDo){    //forEach에서 function을 실행하는 것처럼 각각의 item
//     return toDo.id === 1
// }

function deleteToDo(event){
    const btn =event.target;
    const li = btn.parentNode;

    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);   
    });
    toDos = cleanToDos;
    saveToDos();
}
function saveToDos(){
    localStorage.setItem(Todos_Ls, JSON.stringify(toDos))

}
function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span =document.createElement("span");
    const newId = toDos.length +1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click",deleteToDo)
    span.innerText = text;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId
    toDoList.appendChild(li);

    const todoObj = {
        text: text,
        id: newId
    };
    toDos.push(todoObj); 
    saveToDos()

}

function handleTodos(){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";

}

function loadToDos(){ 
    const loadedToDos = localStorage.getItem(Todos_Ls); 
    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos); 
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }

}
function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleTodos);
}

init();