const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing",
    RN_BT = "rename-btn";

function reName(event){
    localStorage.removeItem(USER_LS);
    greeting.classList.remove(SHOWING_CN);   
    loadName();

}

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleNameSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleNameSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello, ${text}`;
    console.log(greeting.innerText);
    const renameBtn = document.createElement("button");
    renameBtn.innerText = "🖍";
    renameBtn.addEventListener("click",reName);
    renameBtn.classList.add(RN_BT);
    greeting.appendChild(renameBtn);
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);    
    if(currentUser === null){       
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}


function init(){
    loadName();
}

init();