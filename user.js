const form = document.querySelector('.js-NameForm'),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const user_local = "currentUser",
    showing_class = "showing";



function saveName(text){
    localStorage.setItem(user_local, text);
}

function handleSubmit(event){
    event.preventDefault(); 
    const currentValue = input.value;
    paintName(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(showing_class);
    form.addEventListener("submit", handleSubmit);
}

function paintName(text){
    form.classList.remove(showing_class);
    greeting.classList.add(showing_class);

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
    const currentUser = localStorage.getItem(user_local);
    if (currentUser === null){  
        askForName();
    }
    else{  
        paintName(currentUser);
    }
}
function init(){
    loadName();
}
init();