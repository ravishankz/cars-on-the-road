let canvasWidth = 240;
let canvasHeight = 400;
let canvasSizeMultiplier = 1;
  
let roadColor = 40;
  
let carWidth, carHeight, carCornerRadius;
  
let roadLineVWidth, roadLineHHeight;

let roadLineVLeft, roadLineVRight;

let roadLineVColorR = 255, roadLineVColorG = 0, roadLineVColorB = 0;
let colorChangingCompleted = false;
  
let roadLinesHLeft = [];
let roadLinesHRight = [];

let carPosition;
let carLVelocity, carRVelocity;

let car;

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

    car = new Car(carPosition.x, carPosition.y);
}
    
function draw() {
    background(roadColor);
    
    roadLineVLeft.display(roadLineVColorR, roadLineVColorG, roadLineVColorB);
    roadLineVRight.display(roadLineVColorR, roadLineVColorG, roadLineVColorB);
   
    if (!colorChangingCompleted) {
      colorChange();
    }
    else {
      colorChangeRev();
    }
    
    for (let i = 0; i < 6; i++){
      roadLinesHLeft[i].display();
    }  

    for (let i = 0; i < 6; i++){
      roadLinesHRight[i].display();
    }  

    car.display(); 
}

function colorChange() {
  if (roadLineVColorG < 255) {
    roadLineVColorG++;
  }
  else if (roadLineVColorR > 0) {
    roadLineVColorR--;
  }
  else if (roadLineVColorB < 255) {
    roadLineVColorB++;
  }
  else {
    colorChangingCompleted = true;
  }
}

function colorChangeRev() {
  if (roadLineVColorG > 0) {
    roadLineVColorG--;
  }
  else if (roadLineVColorR < 255) {
    roadLineVColorR++;
  }
  else if (roadLineVColorB > 0) {
    roadLineVColorB--;
  }
  else {
    colorChangingCompleted = false;
  }
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
