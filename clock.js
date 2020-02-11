const clockContainer = document.querySelector(".clockContainer"),
    clockTitle = clockContainer.querySelector(".js-clock"),
    select = clockContainer.querySelector(".js-select");



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
// function handleCountry(){
//     const selected = select.nodeValue;
//     localStorage.setItem('country',selected)
// }

// function loadCountry(){
//     const selected = localStorage.getItem('country');
//     if (selected){
//         const option = document.querySelector(`option[value="${selected}"]`);
//         option.selected = true;
//     }
// }

function init(){
    currentTime();
    setInterval(currentTime, 1000);
    // loadCountry();
    // select.addEventListener('change', handleCountry);
}
init();