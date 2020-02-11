const nameForm = document.querySelector(".js-NameForm");
const nameInput = nameForm.querySelector("input");
const greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser";
const SHOWING = "showing";


function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = nameInput.value;
    paintName(currentValue);
    saveName(currentValue);
}

function askForName(){
    nameForm.classList.add(SHOWING)
    nameForm.addEventListener("submit",handleSubmit);
}



function paintName(text){
    nameForm.classList.remove(SHOWING);
    greeting.classList.add(SHOWING);
    const date = new Date();
    const hour = date.getHours();

    if (hour >= 6 && hour < 13){
        greeting.innerText = `Good Morning, ${text}`;
    }
    else if (hour >= 13 && hour < 19){
        greeting.innerText = `Good Afternood, ${text}`;
    }
    else if (hour >= 19 && hour < 24){
        greeting.innerText = `Good Evening, ${text}`;
    }
    else {
        greeting.innerText = `Yo! ${text}`
    }
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){
        askForName();
    } 
    else {
        paintName(currentUser);
    }
}

function init(){
    loadName();
}

init();