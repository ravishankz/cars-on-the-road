let canvasWidth = 240;
let canvasHeight = 400;
let canvasSizeMultiplier = 1;
  
let roadColor = 40;
  
let carWidth, carHeight, carCornerRadius;
  
let roadLineVWidth, roadLineHHeight;

let roadLineVLeft, roadLineVRight;
  
let roadLinesHLeft = [];
let roadLinesHRight = [];

let carPosition;
let carLVelocity, carRVelocity;

function setup() {
    createCanvas(canvasWidth * canvasSizeMultiplier, canvasHeight * canvasSizeMultiplier);
    
    carWidth = width / 8;
    carHeight = height / 8;
    carCornerRadius = width / 40;

    carPosition = createVector(width / 2, height / 4 * 3);
    carLVelocity = createVector(-20, 0);
    carRVelocity = createVector(20, 0);
    
    roadLineVWidth = width / 20;
    roadLineHHeight = height / 20;

    // ROAD LINE-V
    roadLineVLeft = new RoadLineV(roadLineVWidth, 0, roadLineVWidth, height);
    roadLineVRight = new RoadLineV(width - roadLineVWidth * 2, 0, roadLineVWidth, height);
    
    // ROAD LINE-H
    for (let i = 0; i < 6; i++){
      roadLinesHLeft.push(new RoadLineH(70 * i, createVector(roadLineVWidth - 1, 0), createVector(0, 1 * canvasSizeMultiplier)));
    }

    for (let i = 0; i < 6; i++){
      roadLinesHRight.push(new RoadLineH(70 * i, createVector((width - roadLineVWidth * 2) - 1, 0), createVector(0, 1 * canvasSizeMultiplier)));
    }
  }
    
function draw() {
    background(roadColor);
    
    roadLineVLeft.display();
    roadLineVRight.display();
    
    for (let i = 0; i < 6; i++){
      roadLinesHLeft[i].display();
    }  

    for (let i = 0; i < 6; i++){
      roadLinesHRight[i].display();
    }  

    // CAR
    rectMode(CENTER);
    stroke(86, 173, 0);
    strokeWeight(width / 100);
    fill(167, 255, 79);
    rect(carPosition.x, carPosition.y, carWidth, carHeight, carCornerRadius);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    turnLeft();
  } else if (keyCode === RIGHT_ARROW) {
    turnRight();
  }
}

function turnLeft() {
  carPosition.add(carLVelocity);
}

function turnRight() {
  carPosition.add(carRVelocity);
}
