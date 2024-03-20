class RoadLineV {
    constructor(topLeftPosX, topLeftPosY, width, height) {
        this.topLeftPosX = topLeftPosX;
        this.topLeftPosY = topLeftPosY;
        this.width = width;
        this.height = height;
    }

    display(fillR, fillG, fillB){
        rectMode(CORNER);
        stroke(127);
        strokeWeight(width / 240);
        fill(fillR, fillG, fillB);
        rect(this.topLeftPosX, this.topLeftPosY, this.width, this.height);
    }
}