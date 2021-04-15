const body  = document.querySelector("body");

const IMG = "background";

function paintImage()
{
    const image = new Image();
    image.src = `images/${IMG}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

/*function genRandom(){
    const number = Math.floor(Math.random()*2);
    return number;
}*/

function init(){
    //const randomNumber = genRandom();
    paintImage();
}

init();