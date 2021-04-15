const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
const LI = "css-li";
const SP = "css-span";
const BT = "css-btn"

let toDos = [];
let idNumbers = 1;

function deleteToDo(event){
    const btn = event.target;    // 내가 선택한 버튼
    const li = btn.parentNode;   // 그 버튼에 대한 부모요소 확인
    toDoList.removeChild(li);    // 내가 선택한 버튼을 삭제
    const cleanToDos = toDos.filter(function(toDo){   //filter, foreach 이거 잘 기억해두기!
        return toDo.id !== parseInt(li.id) ;
    });    
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintToDo(text){   
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = idNumbers;
    li.classList.add(LI);
    span.classList.add(SP);
    console.log(span.classList);

    idNumbers += 1;
    delBtn.innerText = "✖";
    delBtn.addEventListener("click",deleteToDo);
    delBtn.classList.add(BT);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj ={
        text: text,
        id: newId
    }
    toDos.push(toDoObj);   // toDos라는 배열에 toDoObj라는 오브젝트를 담을거임
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos!==null){
        const parsedToDos = JSON.parse(loadedToDos);  // 오브젝트임
        parsedToDos.forEach(function(toDo){      // 각각의 오브젝트를 toDo라고 부름
           //console.log(toDo.text);
           //console.log(toDo.id);
            paintToDo(toDo.text);
        });
    }
}

function init()
{
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();