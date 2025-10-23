let canvas;
let xPos = 0;
let yPos = 0;
let easing = .06;
let cursorImg;

function preload() {
    cursorImg = loadImage("images/candy_.png");

}


function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", -2);
    noCursor();
    // background(125);
}

function windowResized() {
    console.log("bigger! smaller!");
    resizeCanvas(windowWidth, windowHeight);
}



function draw() {
    clear();
    image(cursorImg, xPos, yPos);
    xPos = xPos + ((mouseX - xPos) * easing);
    yPos = yPos + ((mouseY - yPos) * easing);
}

function mouseMoved(){
    drawThing(mouseX, mouseY);
    drawThing(mouseX -50, mouseY -75);
}

// function drawThing(_x, _y){

// }