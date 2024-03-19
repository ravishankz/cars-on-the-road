class RoadLineV {
    constructor(topLeftPosX, topLeftPosY, width, height) {
        this.topLeftPosX = topLeftPosX;
        this.topLeftPosY = topLeftPosY;
        this.width = width;
        this.height = height;
    }

    display(){
        rectMode(CORNER);
        stroke(127);
        strokeWeight(width / 240);
        fill(255);
        rect(this.topLeftPosX, this.topLeftPosY, this.width, this.height);
    }
}