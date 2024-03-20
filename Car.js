class Car {
    constructor(posX, posY) {
        this.pos = createVector(posX, posY);
        this.wheelLineOffset = 4;
        this.colorR = 0;
        this.colorG = 0;
        this.colorB = 0;
        this.cStrkR = 0;
        this.cStrkG = 0;
        this.cStrkB = 0;
    }

    display() {
        // WHEELS
        rectMode(CENTER);
        stroke(40);
        strokeWeight(0.5);
        fill(192);

        rect(this.pos.x - 15, this.pos.y + 15, 8, 10, 3);

        rect(this.pos.x + 15, this.pos.y + 15, 8, 10, 3);

        rect(this.pos.x + 15, this.pos.y - 15, 8, 10, 3);

        rect(this.pos.x - 15, this.pos.y - 15, 8, 10, 3);

        // WHEEL LINES
        rectMode(CENTER);
        stroke(0);
        strokeWeight(0);
        fill(40);

        rect(this.pos.x - 17, this.pos.y + 17 + this.wheelLineOffset, 2, 3, 3);

        rect(this.pos.x - 17, this.pos.y + -13 + this.wheelLineOffset, 2, 3, 3);

        rect(this.pos.x + 17, this.pos.y + -13 + this.wheelLineOffset, 2, 3, 3);

        rect(this.pos.x + 17, this.pos.y + 17 + this.wheelLineOffset, 2, 3, 3);

        this.wheelLineOffset -= 0.25;

        if (this.wheelLineOffset < -8) {
            this.wheelLineOffset = 4;
        }

        // BODY
        rectMode(CENTER);
        stroke(this.cStrkR, this.cStrkG, this.cStrkB);
        strokeWeight(width / 100);
        fill(this.colorR, this.colorG, this.colorB);
        rect(this.pos.x, this.pos.y, width / 8, height / 8, width / 40);
    }

    color(colorR, colorG, colorB) {
        this.colorR = colorR;
        this.colorG = colorG;
        this.colorB = colorB;
    }

    stroke(cStrkR, cStrkG, cStrkB) {
        this.cStrkR = cStrkR;
        this.cStrkG = cStrkG;
        this.cStrkB = cStrkB;
    }
}