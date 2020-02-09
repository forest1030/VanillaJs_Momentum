const clockContainer = document.querySelector(".clockContainer"),
    clockTitle = clockContainer.querySelector(".js-clock");

function currentTime(){
    const date = new Date();
    const hourIn = date.getHours();
    const minIn = date.getMinutes();
    const secIn = date.getSeconds();
    
    const Hour = `${hourIn < 10 ? `0${hourIn}` : hourIn}`;
    const Min = `${minIn < 10 ? `0${minIn}` : minIn}`;
    const Sec = `${secIn < 10 ? `0${secIn}` : secIn}`;

    clockTitle.innerHTML = `${Hour} : ${Min} : ${Sec}`;
}

function init(){
    currentTime();
    setInterval(currentTime, 1000);
}
init();