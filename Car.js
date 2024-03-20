class Car {
    constructor(posX, posY) {
        this.pos = createVector(posX, posY);
        this.wheelLineOffset = 4;
    }

    display() {
        // WHEELS
        rectMode(CENTER);
        stroke(40);
        strokeWeight(1);
        fill(192);

        rect(this.pos.x - 15, this.pos.y + 15, 8, 10, 3);

        rect(this.pos.x + 15, this.pos.y + 15, 8, 10, 3);

        rect(this.pos.x + 15, this.pos.y - 15, 8, 10, 3);

        rect(this.pos.x - 15, this.pos.y - 15, 8, 10, 3);

        // WHEEL LINES
        rectMode(CENTER);
        stroke(0);
        strokeWeight(0);
        fill(roadColor);
        rect(this.pos.x - 17, this.pos.y + 17 + this.wheelLineOffset, 2, 3, 3);

        this.wheelLineOffset -= 0.3;

        if (this.wheelLineOffset < -8) {
            this.wheelLineOffset = 4;
        }

        // BODY
        rectMode(CENTER);
        stroke(86, 173, 0);
        strokeWeight(width / 100);
        fill(167, 255, 79);
        rect(this.pos.x, this.pos.y, width / 8, height / 8, width / 40);
    }

    
}