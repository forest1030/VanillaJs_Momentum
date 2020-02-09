const body = document.querySelector('body');

const IMG_NUMBER = 5;

function paintImage(imgNumber){
    const image = new Image();
    IMG_NUMBER.scr = `images/${imgNumber + 1}.jpg`;
    image.classList.add('bgimg')
    body.prepend(image);
}

function genRandom(){
    const num = Math.floor(Math.random() * IMG_NUMBER);
    return num;
}

function init(){
    const randomNumber =  genRandom();
    paintImage(randomNumber);
}
init();