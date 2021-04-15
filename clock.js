const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const data = new Date();
    const minutes = data.getMinutes();
    const hours = data.getHours();
    const seconds = data.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}`:hours}:${
        minutes<10 ? `0${minutes}` : minutes}`;
    
}


function init(){
    getTime();
    setInterval(getTime,1000);
}

init();