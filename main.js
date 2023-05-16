const selectorRectangle = document.getElementById('selector-rectangle');
let container = document.getElementById("container");
let startX, startY, currentX, currentY;
let icons = document.querySelectorAll(".icon-btn");
const putin = document.querySelectorAll(".putin");
let binrestore = document.getElementById("binrestore");
let aboutrestore = document.getElementById("aboutR");
let webrestore = document.getElementById("webR");
let Fr = document.getElementById("FR")
let IR = document.getElementById("IR")
let binLOL = true;
let aboutLOL = true;
let webLOL = true;
let fLOL = true;
let iLOL = true;

// remove some stuff
binrestore.style.display = "none"
aboutrestore.style.display = "none"
webrestore.style.display = "none"
Fr.style.display = "none"
IR.style.display = "none"

container.addEventListener('mousedown', (event) => {
  // Start tracking the mouse movement when the user clicks on the document
  startX = event.clientX;
  startY = event.clientY;
  selectorRectangle.style.left = `${startX}px`;
  selectorRectangle.style.top = `${startY}px`;
  selectorRectangle.style.width = '0px';
  selectorRectangle.style.height = '0px';
  selectorRectangle.style.display = 'block';
});

document.addEventListener('mousemove', (event) => {
  // Update the size and position of the rectangle as the user moves the mouse
  if (selectorRectangle.style.display === 'block') {
    currentX = event.clientX;
    currentY = event.clientY;
    selectorRectangle.style.width = `${Math.abs(currentX - startX)}px`;
    selectorRectangle.style.height = `${Math.abs(currentY - startY)}px`;
    selectorRectangle.style.left = `${Math.min(currentX, startX)}px`;
    selectorRectangle.style.top = `${Math.min(currentY, startY)}px`;
  }
  icons.forEach((image) => {
    const imageRect = image.getBoundingClientRect();
    const selectorRect = selectorRectangle.getBoundingClientRect();
    const isOverlap = !(imageRect.right < selectorRect.left || 
                        imageRect.left > selectorRect.right || 
                        imageRect.bottom < selectorRect.top || 
                        imageRect.top > selectorRect.bottom);
    if (isOverlap) {
      image.classList.add('selected-image');
    } 
 
  });
} 

);

document.addEventListener('mouseup', (event) => {
  selectorRectangle.style.display = 'none';


});
container.addEventListener("mousedown", ()=>{
    icons.forEach((V)=>{
V.classList.remove("selected-image");

    })
})


const buttons = document.getElementsByClassName('icon-btn');
let previousButton = null;

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', () => {
    if (previousButton !== null) {
      previousButton.classList.remove("selected-image");
     
    }

    button.classList.add("selected-image");

    previousButton = button;
  });
});
// another 





const containerbin = document.getElementById("container-bin");
const selectorbin = document.getElementById("selector-bin");
let start = {};
let end = {};


containerbin.addEventListener("mousedown", (e) => {
  start.x = e.clientX;
  start.y = e.clientY;

  selectorbin.style.left = start.x + "px";
  selectorbin.style.top = start.y + "px";
  selectorbin.style.width = "0";
  selectorbin.style.height = "0";
  selectorbin.style.display = "block";
});

containerbin.addEventListener("mousemove", (e) => {
  if (!start.x || !start.y) return;

  end.x = e.clientX;
  end.y = e.clientY;

  const containerRect = containerbin.getBoundingClientRect();

  const width = Math.abs(end.x - start.x);
  const height = Math.abs(end.y - start.y);
  const left = Math.min(end.x, start.x) - containerRect.left;
  const top = Math.min(end.y, start.y) - containerRect.top;

  selectorbin.style.width = width + "px";
  selectorbin.style.height = height + "px";
  selectorbin.style.left = left + "px";
  selectorbin.style.top = top + "px";

  putin.forEach((image) => {
    const imageRect = image.getBoundingClientRect();
    const selectorRect = selectorbin.getBoundingClientRect();
    const isOverlap = !(imageRect.right < selectorRect.left || 
                        imageRect.left > selectorRect.right || 
                        imageRect.bottom < selectorRect.top || 
                        imageRect.top > selectorRect.bottom);
    if (isOverlap) {
      image.classList.add('selected-image');
    } 
 
  });
  

})

containerbin.addEventListener("mouseup", () => {
  start = {};
  end = {};
  selectorbin.style.display = "none";

})


containerbin.addEventListener("mousedown",()=>{

  const putin = document.getElementsByClassName("putin");
  for (let i = 0; i < putin.length; i++) {
    const element = putin[i]
    element.classList.remove("selected-image")
  };
})

//dont look at this please 
putin.forEach((e)=>{

  e.addEventListener("click",()=>{
    e.classList.add("selected-image")
  })
})

// let things be moveable

var draggableDiv = document.getElementById('container-bin');
let headerbin = document.getElementById("header-bin")
var offsetX = 0;
var offsetY = 0;
var dragging = false;

headerbin.addEventListener('mousedown', function(event) {
  offsetX = event.clientX - draggableDiv.offsetLeft;
  offsetY = event.clientY - draggableDiv.offsetTop;
  dragging = true;
});

document.addEventListener('mousemove', function(event) {
  if (dragging && binLOL) {
    draggableDiv.style.left = (event.clientX - offsetX) + 'px';
    draggableDiv.style.top = (event.clientY - offsetY) + 'px';
  }
});

document.addEventListener('mouseup', function() {
  dragging = false;
});
//now make it resize able

const resizableDiv = document.getElementById('container-bin');
const handleRight = document.querySelector('.resize-handle-right');
const handleBottom = document.querySelector('.resize-handle-bottom');
const handleLeft = document.querySelector('.resize-handle-left');

let startWidth;
let startHeight;

handleRight.addEventListener('mousedown', initResizeRight, false);
handleBottom.addEventListener('mousedown', initResizeBottom, false);
handleLeft.addEventListener('mousedown', initResizeLeft, false);

function initResizeRight(e) {
  if(binLOL){
  startX = e.clientX;
  startWidth = parseInt(document.defaultView.getComputedStyle(resizableDiv).width, 10);
  document.documentElement.addEventListener('mousemove', doResizeRight, false);
  document.documentElement.addEventListener('mouseup', stopResize, false);
  }
}

function initResizeBottom(e) {
  if(binLOL){
  startY = e.clientY;
  startHeight = parseInt(document.defaultView.getComputedStyle(resizableDiv).height, 10);
  document.documentElement.addEventListener('mousemove', doResizeBottom, false);
  document.documentElement.addEventListener('mouseup', stopResize, false);
}}

function initResizeLeft(e) {
  if(binLOL){
  startX = e.clientX;
  startWidth = parseInt(document.defaultView.getComputedStyle(resizableDiv).width, 10);
  document.documentElement.addEventListener('mousemove', doResizeLeft, false);
  document.documentElement.addEventListener('mouseup', stopResize, false);
  }}

function doResizeRight(e) {
  if(binLOL){
  const width = startWidth + e.clientX - startX;
  resizableDiv.style.width = width + 'px';
}}

function doResizeBottom(e) {
  if(binLOL){
  const height = startHeight + e.clientY - startY;
  resizableDiv.style.height = height + 'px';
}}

function doResizeLeft(e) {
  if(binLOL){
  const width = startWidth - e.clientX + startX;
  resizableDiv.style.width = width + 'px';
  resizableDiv.style.left = e.clientX + 'px';
}}

function stopResize() {
  if(binLOL){
  document.documentElement.removeEventListener('mousemove', doResizeRight, false);
  document.documentElement.removeEventListener('mousemove', doResizeBottom, false);
  document.documentElement.removeEventListener('mousemove', doResizeLeft, false);
  document.documentElement.removeEventListener('mouseup', stopResize, false);
}}
// show bin 
function binShow(){

  others.forEach((e)=>{
    e.style.zIndex = 200
  })
  containerbin.style.zIndex = 9999
containerbin.classList.remove("none")
}
// close 
function binClose(){
  containerbin.classList.add("none")
}
// bin big

let binmax = document.getElementById("binmaximize");
function binMax(){
  containerbin.style.width = "100%";
  containerbin.style.height ="100vh",
  containerbin.style.top = "0", containerbin.style.left ="0";
  binmax.style.display = "none"
  binrestore.style.display= "block";
  binLOL = false
}
// restore it
function binRestore(){
  containerbin.style.top = "20%"
  containerbin.style.left = "30%"
  containerbin.style.width ="600px"
  containerbin.style.height = "500px"
  binrestore.style.display = "none"
  binmax.style.display = "block"
  binLOL = true;
}

// sorry for the unclear code but i actuallly dont give a fuck as long it works its good
// now lets make a game so no one will get bored by this fucked up operating system
//board
let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

//bird
let birdWidth = 34; //width/height ratio = 408/228 = 17/12
let birdHeight = 24;
let birdX = boardWidth/8;
let birdY = boardHeight/2;
let birdImg;

let bird = {
    x : birdX,
    y : birdY,
    width : birdWidth,
    height : birdHeight
}

//pipes
let pipeArray = [];
let pipeWidth = 64; //width/height ratio = 384/3072 = 1/8
let pipeHeight = 512;
let pipeX = boardWidth;
let pipeY = 0;

let topPipeImg;
let bottomPipeImg;

//physics
let velocityX = -2; //pipes moving left speed
let velocityY = 0; //bird jump speed
let gravity = 0.4;

let gameOver = false;
let score = 0;

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d"); //used for drawing on the board

    //draw flappy bird
    // context.fillStyle = "green";
    // context.fillRect(bird.x, bird.y, bird.width, bird.height);

    //load images
    birdImg = new Image();
    birdImg.src = "./src/flappybird.png";
    birdImg.onload = function() {
        context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
    }

    topPipeImg = new Image();
    topPipeImg.src = "./src/toppipe.png";

    bottomPipeImg = new Image();
    bottomPipeImg.src = "./src/bottompipe.png";

    requestAnimationFrame(update);
    setInterval(placePipes, 1500); //every 1.5 seconds
    document.addEventListener("keydown", moveBird);
}

function update() {
    requestAnimationFrame(update);
    if (gameOver) {
        return;
    }
    context.clearRect(0, 0, board.width, board.height);

    //bird
    velocityY += gravity;
    // bird.y += velocityY;
    bird.y = Math.max(bird.y + velocityY, 0); //apply gravity to current bird.y, limit the bird.y to top of the canvas
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

    if (bird.y > board.height) {
        gameOver = true;
    }

    //pipes
    for (let i = 0; i < pipeArray.length; i++) {
        let pipe = pipeArray[i];
        pipe.x += velocityX;
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);

        if (!pipe.passed && bird.x > pipe.x + pipe.width) {
            score += 0.5; //0.5 because there are 2 pipes! so 0.5*2 = 1, 1 for each set of pipes
            pipe.passed = true;
        }

        if (detectCollision(bird, pipe)) {
            gameOver = true;
        }
    }

    //clear pipes
    while (pipeArray.length > 0 && pipeArray[0].x < -pipeWidth) {
        pipeArray.shift(); //removes first element from the array
    }

    //score
    context.fillStyle = "white";
    context.font="45px sans-serif";
    context.fillText(score, 5, 45);

    if (gameOver) {
        context.fillText("SPACE TO PLAY", 5, 90);
    }
}

function placePipes() {
    if (gameOver) {
        return;
    }

    //(0-1) * pipeHeight/2.
    // 0 -> -128 (pipeHeight/4)
    // 1 -> -128 - 256 (pipeHeight/4 - pipeHeight/2) = -3/4 pipeHeight
    let randomPipeY = pipeY - pipeHeight/4 - Math.random()*(pipeHeight/2);
    let openingSpace = board.height/4;

    let topPipe = {
        img : topPipeImg,
        x : pipeX,
        y : randomPipeY,
        width : pipeWidth,
        height : pipeHeight,
        passed : false
    }
    pipeArray.push(topPipe);

    let bottomPipe = {
        img : bottomPipeImg,
        x : pipeX,
        y : randomPipeY + pipeHeight + openingSpace,
        width : pipeWidth,
        height : pipeHeight,
        passed : false
    }
    pipeArray.push(bottomPipe);
}

function moveBird(e) {
    if (e.code == "Space" || e.code == "ArrowUp" || e.code == "KeyX") {
        //jump
        velocityY = -6;

        //reset game
        if (gameOver) {
            bird.y = birdY;
            pipeArray = [];
            score = 0;
            gameOver = false;
        }
    }
}

function detectCollision(a, b) {
    return a.x < b.x + b.width &&   //a's top left corner doesn't reach b's top right corner
           a.x + a.width > b.x &&   //a's top right corner passes b's top left corner
           a.y < b.y + b.height &&  //a's top left corner doesn't reach b's bottom left corner
           a.y + a.height > b.y;    //a's bottom left corner passes b's top left corner
}

function gameShow(){

  others.forEach((e)=>{
    e.style.zIndex = 200
  })
  draggableGame.style.zIndex = 9999

let jesus = document.getElementById("board1");
jesus.style.display = "block"

}
function gameClose(){
  let jesus = document.getElementById("board1");
  jesus.style.display = "none"
}
/// let that game moveable
var draggableGame = document.getElementById('board1');
let headerGame = document.getElementById("game-head")
var offsetX = 0;
var offsetY = 0;
var draggingGame = false;

headerGame.addEventListener('mousedown', function(event) {
  offsetX = event.clientX - draggableGame.offsetLeft;
  offsetY = event.clientY - draggableGame.offsetTop;
  draggingGame = true;
});

document.addEventListener('mousemove', function(event) {
  if (draggingGame && binLOL) {
    draggableGame.style.left = (event.clientX - offsetX) + 'px';
    draggableGame.style.top = (event.clientY - offsetY) + 'px';
  }
});

document.addEventListener('mouseup', function() {
  draggingGame = false;
});

// let about moveable

let draggingAbout = false;
var draggableAbout = document.getElementById('about');
draggableAbout.style.display = "none"
let headerAbout = document.getElementById("about-head")

headerAbout.addEventListener('mousedown', function(event) {
  offsetX = event.clientX - draggableAbout.offsetLeft;
  offsetY = event.clientY - draggableAbout.offsetTop;
  draggingAbout = true;
});

document.addEventListener('mousemove', function(event) {
  if (draggingAbout && aboutLOL) {
    draggableAbout.style.left = (event.clientX - offsetX) + 'px';
    draggableAbout.style.top = (event.clientY - offsetY) + 'px';
  }
});

document.addEventListener('mouseup', function() {
  draggingAbout = false;
});
function aboutClose(){
  draggableAbout.style.display = "none"
}
function aboutMax(){
  aboutLOL = false;
  let aboutMax = document.getElementById("aboutmaximize");
  aboutMax.style.display = "none"
  draggableAbout.style.width = "100%";
  draggableAbout.style.height = "100vh";
  aboutrestore.style.display = "block"
  draggableAbout.style.top = "0"
  draggableAbout.style.left = "0";
}
function aboutMin(){
  aboutLOL = true;
  let aboutMax = document.getElementById("aboutmaximize");
  let aboutmin = document.getElementById("aboutR")
  aboutMax.style.display = "block";
  aboutmin.style.display = "none"
  draggableAbout.style.width = "700px";
  draggableAbout.style.height = "500px";
  draggableAbout.style.top = "10%"
  draggableAbout.style.left = "30%";

}
function aboutShow(){
  others.forEach((e)=>{
    e.style.zIndex = 200
  })
  draggableAbout.style.zIndex = 9999
  draggableAbout.style.display = "block"
}
// forgot to make this thing resizable


const resizableAbout = document.getElementById('about');
const handleRight1 = document.querySelector('.rre1');
const handleBottom1 = document.querySelector('.bre1');
const handleLeft1 = document.querySelector('.lre1');


handleRight1.addEventListener('mousedown', initResizeRight1, false);
handleBottom1.addEventListener('mousedown', initResizeBottom1, false);
handleLeft1.addEventListener('mousedown', initResizeLeft1, false);

function initResizeRight1(e) {
  if(aboutLOL){
  startX = e.clientX;
  startWidth = parseInt(document.defaultView.getComputedStyle(resizableAbout).width, 10);
  document.documentElement.addEventListener('mousemove', doResizeRight1, false);
  document.documentElement.addEventListener('mouseup', stopResize1, false);
  }
}

function initResizeBottom1(e) {
  if(aboutLOL){
  startY = e.clientY;
  startHeight = parseInt(document.defaultView.getComputedStyle(resizableAbout).height, 10);
  document.documentElement.addEventListener('mousemove', doResizeBottom1, false);
  document.documentElement.addEventListener('mouseup', stopResize1, false);
}}

function initResizeLeft1(e) {
  if(aboutLOL){
  startX = e.clientX;
  startWidth = parseInt(document.defaultView.getComputedStyle(resizableAbout).width, 10);
  document.documentElement.addEventListener('mousemove', doResizeLeft1, false);
  document.documentElement.addEventListener('mouseup', stopResize1, false);
  }}

function doResizeRight1(e) {
  if(aboutLOL){
  const width = startWidth + e.clientX - startX;
  resizableAbout.style.width = width + 'px';
}}

function doResizeBottom1(e) {
  if(aboutLOL){
  const height = startHeight + e.clientY - startY;
  resizableAbout.style.height = height + 'px';
}}

function doResizeLeft1(e) {
  if(aboutLOL){
  const width = startWidth - e.clientX + startX;
  resizableAbout.style.width = width + 'px';
  resizableAbout.style.left = e.clientX + 'px';
}}

function stopResize1() {
  if(aboutLOL){
  document.documentElement.removeEventListener('mousemove', doResizeRight1, false);
  document.documentElement.removeEventListener('mousemove', doResizeBottom1, false);
  document.documentElement.removeEventListener('mousemove', doResizeLeft1, false);
  document.documentElement.removeEventListener('mouseup', stopResize1, false);
}};
// brows lol

let draggingWeb = false;
var draggableWeb = document.getElementById('browes');
let headerWeb = document.getElementById("web-head")

headerWeb.addEventListener('mousedown', function(event) {
  offsetX = event.clientX - draggableWeb.offsetLeft;
  offsetY = event.clientY - draggableWeb.offsetTop;
  draggingWeb = true;
});

document.addEventListener('mousemove', function(event) {
  if (draggingWeb && webLOL) {
    draggableWeb.style.left = (event.clientX - offsetX) + 'px';
    draggableWeb.style.top = (event.clientY - offsetY) + 'px';
  }
});

document.addEventListener('mouseup', function() {
  draggingWeb = false;
});
// resizeable browes here lol


const resizableWeb = document.getElementById('browes');
const handleRight2 = document.querySelector('.rre2');
const handleBottom2 = document.querySelector('.bre2');
const handleLeft2 = document.querySelector('.lre2');


handleRight2.addEventListener('mousedown', initResizeRight2, false);
handleBottom2.addEventListener('mousedown', initResizeBottom2, false);
handleLeft2.addEventListener('mousedown', initResizeLeft2, false);

function initResizeRight2(e) {
  if(webLOL){
  startX = e.clientX;
  startWidth = parseInt(document.defaultView.getComputedStyle(resizableWeb).width, 10);
  document.documentElement.addEventListener('mousemove', doResizeRight2, false);
  document.documentElement.addEventListener('mouseup', stopResize2, false);
  }
}

function initResizeBottom2(e) {
  if(webLOL){
  startY = e.clientY;
  startHeight = parseInt(document.defaultView.getComputedStyle(resizableWeb).height, 10);
  document.documentElement.addEventListener('mousemove', doResizeBottom2, false);
  document.documentElement.addEventListener('mouseup', stopResize2, false);
}}

function initResizeLeft2(e) {
  if(webLOL){
  startX = e.clientX;
  startWidth = parseInt(document.defaultView.getComputedStyle(resizableWeb).width, 10);
  document.documentElement.addEventListener('mousemove', doResizeLeft2, false);
  document.documentElement.addEventListener('mouseup', stopResize2, false);
  }}

function doResizeRight2(e) {
  if(webLOL){
  const width = startWidth + e.clientX - startX;
  resizableWeb.style.width = width + 'px';
}}

function doResizeBottom2(e) {
  if(webLOL){
  const height = startHeight + e.clientY - startY;
  resizableWeb.style.height = height + 'px';
}}

function doResizeLeft2(e) {
  if(webLOL){
  const width = startWidth - e.clientX + startX;
  resizableWeb.style.width = width + 'px';
  resizableWeb.style.left = e.clientX + 'px';
}}

function stopResize2() {
  if(webLOL){
  document.documentElement.removeEventListener('mousemove', doResizeRight2, false);
  document.documentElement.removeEventListener('mousemove', doResizeBottom2, false);
  document.documentElement.removeEventListener('mousemove', doResizeLeft2, false);
  document.documentElement.removeEventListener('mouseup', stopResize2, false);
}};
/// holy moly that was hard
function webClose(){
  draggableWeb.style.display = "none"
}
function webMax(){
  draggableWeb.style.width = "100%";
  draggableWeb.style.height = "100vh";
  draggableWeb.style.top = '0';
  draggableWeb.style.left = "0"
  webLOL = false;
  webrestore.style.display = "block";
  let webM = document.getElementById("webM")
  webM.style.display = "none"
}
function webR(){
  webLOL = true;
  let webM = document.getElementById("webM");
  let webR = document.getElementById("webR")
  webM.style.display = "block";
  webR.style.display = "none"
  draggableWeb.style.width = "700px";
  draggableWeb.style.height = "500px";
  draggableWeb.style.top = "10%"
  draggableWeb.style.left = "30%";

}
function webShow(){
  others.forEach((e)=>{
    e.style.zIndex = 200
  })
  draggableWeb.style.zIndex = 9999
  draggableWeb.style.display = "block"
}
// holy damn

const containerF = document.getElementById("folder");
const selectorF = document.getElementById("sef");

containerF.addEventListener("mousedown", (e) => {
  start.x = e.clientX;
  start.y = e.clientY;

  selectorF.style.left = start.x + "px";
  selectorF.style.top = start.y + "px";
  selectorF.style.width = "0";
  selectorF.style.height = "0";
  selectorF.style.display = "block";
});

containerF.addEventListener("mousemove", (e) => {
  if (!start.x || !start.y) return;

  end.x = e.clientX;
  end.y = e.clientY;

  const containerRect = containerF.getBoundingClientRect();

  const width = Math.abs(end.x - start.x);
  const height = Math.abs(end.y - start.y);
  const left = Math.min(end.x, start.x) - containerRect.left;
  const top = Math.min(end.y, start.y) - containerRect.top;

  selectorF.style.width = width + "px";
  selectorF.style.height = height + "px";
  selectorF.style.left = left + "px";
  selectorF.style.top = top + "px";

  putin.forEach((image) => {
    const imageRect = image.getBoundingClientRect();
    const selectorRect = selectorF.getBoundingClientRect();
    const isOverlap = !(imageRect.right < selectorRect.left || 
                        imageRect.left > selectorRect.right || 
                        imageRect.bottom < selectorRect.top || 
                        imageRect.top > selectorRect.bottom);
    if (isOverlap) {
      image.classList.add('selected-image');
    } 
 
  });
  

})

containerF.addEventListener("mouseup", () => {
  start = {};
  end = {};
  selectorF.style.display = "none";

})


containerF.addEventListener("mousedown",()=>{

  const putin = document.getElementsByClassName("putin");
  for (let i = 0; i < putin.length; i++) {
    const element = putin[i]
    element.classList.remove("selected-image")
  };
})

/// aaaaaahhhhhhhhhhhh

const resizableF = document.getElementById('folder');
const handleRight3 = document.querySelector('.rre3');
const handleBottom3 = document.querySelector('.bre3');
const handleLeft3 = document.querySelector('.lre3');


handleRight3.addEventListener('mousedown', initResizeRight3, false);
handleBottom3.addEventListener('mousedown', initResizeBottom3, false);
handleLeft3.addEventListener('mousedown', initResizeLeft3, false);

function initResizeRight3(e) {
  if(fLOL){
  startX = e.clientX;
  startWidth = parseInt(document.defaultView.getComputedStyle(resizableF).width, 10);
  document.documentElement.addEventListener('mousemove', doResizeRight3, false);
  document.documentElement.addEventListener('mouseup', stopResize3, false);
  }
}

function initResizeBottom3(e) {
  if(fLOL){
  startY = e.clientY;
  startHeight = parseInt(document.defaultView.getComputedStyle(resizableF).height, 10);
  document.documentElement.addEventListener('mousemove', doResizeBottom3, false);
  document.documentElement.addEventListener('mouseup', stopResize3, false);
}}

function initResizeLeft3(e) {
  if(fLOL){
  startX = e.clientX;
  startWidth = parseInt(document.defaultView.getComputedStyle(resizableF).width, 10);
  document.documentElement.addEventListener('mousemove', doResizeLeft3, false);
  document.documentElement.addEventListener('mouseup', stopResize3, false);
  }}

function doResizeRight3(e) {
  if(fLOL){
  const width = startWidth + e.clientX - startX;
  resizableF.style.width = width + 'px';
}}

function doResizeBottom3(e) {
  if(fLOL){
  const height = startHeight + e.clientY - startY;
  resizableF.style.height = height + 'px';
}}

function doResizeLeft3(e) {
  if(fLOL){
  const width = startWidth - e.clientX + startX;
  resizableF.style.width = width + 'px';
  resizableF.style.left = e.clientX + 'px';
}}

function stopResize3() {
  if(fLOL){
  document.documentElement.removeEventListener('mousemove', doResizeRight3, false);
  document.documentElement.removeEventListener('mousemove', doResizeBottom3, false);
  document.documentElement.removeEventListener('mousemove', doResizeLeft3, false);
  document.documentElement.removeEventListener('mouseup', stopResize3, false);
}};

// i am gonna die
// F = folder i swear

let draggingF = false;
var draggableF = document.getElementById('folder');
let headerF = document.getElementById("folder-head")

headerF.addEventListener('mousedown', function(event) {
  offsetX = event.clientX - draggableF.offsetLeft;
  offsetY = event.clientY - draggableF.offsetTop;
  draggingF = true;
});

document.addEventListener('mousemove', function(event) {
  if (draggingF && fLOL) {
    draggableF.style.left = (event.clientX - offsetX) + 'px';
    draggableF.style.top = (event.clientY - offsetY) + 'px';
  }
});

document.addEventListener('mouseup', function() {
  draggingF = false;
});

// i think this code will get to 1500 lines

function FMax(){
  fLOL = false;
  draggableF.style.left ="0";
  draggableF.style.top = "0"
  draggableF.style.width = "100%"
  draggableF.style.height = "100vh"
  Fr.style.display = "block"
  let FMax = document.getElementById("FMax");
  FMax.style.display = 'none'
}

function FR(){

  fLOL = true;
  draggableF.style.left ="30%";
  draggableF.style.top = "10%"
  draggableF.style.width = "800px"
  draggableF.style.height = "500px"
  Fr.style.display = "none"
  let FMax = document.getElementById("FMax");
  FMax.style.display = 'block'

}

function FClose(){
  draggableF.style.display = "none"
}

function FShow(){
  others.forEach((e)=>{
    e.style.zIndex = 200
  })
  draggableF.style.zIndex = 9999
  draggableF.style.display = "flex"
}
//ahhhhhh
let imger = document.getElementById("imger");
let imge1 = document.getElementById("imge1");
let imge2 = document.getElementById("imge2");
let imge3 = document.getElementById("imge3");

function img1(){
  others.forEach((e)=>{
    e.style.zIndex = 200
  })
  imger.style.zIndex = 9999
  imger.style.display = "block";
  imger.style.zIndex = "999"
  imge1.style.display = "block"
  imge2.style.display = "none"
  imge3.style.display = "none"
}
function img2(){
  others.forEach((e)=>{
    e.style.zIndex = 200
  })
  imger.style.zIndex = 9999
  imger.style.zIndex = "999"
  imger.style.display = "block";
  imge2.style.display = "block"
  imge1.style.display = "none"
  imge3.style.display = "none"
}
function img3(){
  others.forEach((e)=>{
    e.style.zIndex = 200
  })
  imger.style.zIndex = 9999
  imger.style.zIndex = "999"
  imger.style.display = "block";
  imge3.style.display = "block"
  imge2.style.display = "none"
  imge1.style.display = "none"
}
// now let that thing resizeable


const handleRight4 = document.querySelector('.rre4');
const handleBottom4 = document.querySelector('.bre4');
const handleLeft4 = document.querySelector('.lre4');


handleRight4.addEventListener('mousedown', initResizeRight4, false);
handleBottom4.addEventListener('mousedown', initResizeBottom4, false);
handleLeft4.addEventListener('mousedown', initResizeLeft4, false);

function initResizeRight4(e) {
  if(fLOL){
  startX = e.clientX;
  startWidth = parseInt(document.defaultView.getComputedStyle(imger).width, 10);
  document.documentElement.addEventListener('mousemove', doResizeRight4, false);
  document.documentElement.addEventListener('mouseup', stopResize4, false);
  }
}

function initResizeBottom4(e) {
  if(fLOL){
  startY = e.clientY;
  startHeight = parseInt(document.defaultView.getComputedStyle(imger).height, 10);
  document.documentElement.addEventListener('mousemove', doResizeBottom4, false);
  document.documentElement.addEventListener('mouseup', stopResize4, false);
}}

function initResizeLeft4(e) {
  if(fLOL){
  startX = e.clientX;
  startWidth = parseInt(document.defaultView.getComputedStyle(imger).width, 10);
  document.documentElement.addEventListener('mousemove', doResizeLeft4, false);
  document.documentElement.addEventListener('mouseup', stopResize4, false);
  }}

function doResizeRight4(e) {
  if(fLOL){
  const width = startWidth + e.clientX - startX;
  imger.style.width = width + 'px';
}}

function doResizeBottom4(e) {
  if(fLOL){
  const height = startHeight + e.clientY - startY;
  imger.style.height = height + 'px';
}}

function doResizeLeft4(e) {
  if(fLOL){
  const width = startWidth - e.clientX + startX;
  imger.style.width = width + 'px';
  imger.style.left = e.clientX + 'px';
}}

function stopResize4() {
  if(fLOL){
  document.documentElement.removeEventListener('mousemove', doResizeRight4, false);
  document.documentElement.removeEventListener('mousemove', doResizeBottom4, false);
  document.documentElement.removeEventListener('mousemove', doResizeLeft4, false);
  document.documentElement.removeEventListener('mouseup', stopResize4, false);
}};
/// moveable


let draggingI = false;

let headerI = document.getElementById("imger-head")

headerI.addEventListener('mousedown', function(event) {
  offsetX = event.clientX - imger.offsetLeft;
  offsetY = event.clientY - imger.offsetTop;
  draggingI = true;
});

document.addEventListener('mousemove', function(event) {
  if (draggingI && iLOL) {
    imger.style.left = (event.clientX - offsetX) + 'px';
    imger.style.top = (event.clientY - offsetY) + 'px';
  }
});

document.addEventListener('mouseup', function() {
  draggingI = false;
});
function IClose(){
  imger.style.display = "none"
}
function IMax(){

  imger.style.top = "0"
  imger.style.left = "0"
  imger.style.width = "100%"
  imger.style.height = "100vh"
  iLOL = false
  IR.style.display = "block"
  let Imax = document.getElementById("IMax")
  Imax.style.display = "none"

}
function Ir(){

  imger.style.top = "20%"
  imger.style.left = "30%"
  imger.style.width = "700px"
  imger.style.height = "500px"
  iLOL = true
  IR.style.display = "none"
  let Imax = document.getElementById("IMax")
  Imax.style.display = "block"

}
// now lets set the z index things
let others = document.querySelectorAll(".other")

imger.addEventListener("mousedown",()=>{
  others.forEach((e)=>{
    e.style.zIndex = 200
  })
  imger.style.zIndex = 1000
})

draggableF.addEventListener("mousedown",()=>{
  others.forEach((e)=>{
    e.style.zIndex = 200
  })
  draggableF.style.zIndex = 1000
})

draggableGame.addEventListener("mousedown",()=>{
  others.forEach((e)=>{
    e.style.zIndex = 200
  })
  draggableGame.style.zIndex = 1000
})

draggableAbout.addEventListener("mousedown",()=>{
  others.forEach((e)=>{
    e.style.zIndex = 200
  })
  draggableAbout.style.zIndex = 1000
})

draggableDiv.addEventListener("mousedown",()=>{
  others.forEach((e)=>{
    e.style.zIndex = 200
  })
  draggableDiv.style.zIndex = 1000
})

draggableWeb.addEventListener("mousedown",()=>{
  others.forEach((e)=>{
    e.style.zIndex = 200
  })
  draggableWeb.style.zIndex = 1000
})
// right click 
let right = document.getElementById("right");
container.addEventListener("contextmenu",(e)=>{
  right.style.display = "block"
  right.style.top = e.offsetY+ "px"
  right.style.left = e.offsetX+ "px"
})
let refresh = document.getElementById("refresh");
refresh.addEventListener("click",()=>{

  icons.forEach((e)=>{
    e.style.display = "none"
  })
  setInterval(() => {
    icons.forEach((e)=>{
      e.style.display = "block"
    })
  }, 200);
right.style.display = "none"
})
// background 

let backgroundC = document.getElementById("background")
backgroundC.addEventListener("click",(e)=>{

right.style.display ='none'
})
// backend lik
let choose = document.getElementById("background");
choose.addEventListener("change",()=>{
  let container = document.getElementById("container")
  container.style.background = "transparent"
  container.style.background = `url(${ URL.createObjectURL(choose.files[0])}) center no-repeat `
})