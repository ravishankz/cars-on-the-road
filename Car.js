class Car {
    constructor(posX, posY) {
        this.pos = createVector(posX, posY);
    }

    display() {
        // WHEELS
        rectMode(CENTER);
        stroke(127);
        strokeWeight(1);
        fill(192);

        rect(this.pos.x - 15, this.pos.y + 15, 8, 10, 6);

        rect(this.pos.x + 15, this.pos.y + 15, 8, 10, 6);

        rect(this.pos.x + 15, this.pos.y - 15, 8, 10, 6);

        rect(this.pos.x - 15, this.pos.y - 15, 8, 10, 6);

        // BODY
        rectMode(CENTER);
        stroke(86, 173, 0);
        strokeWeight(width / 100);
        fill(167, 255, 79);
        rect(this.pos.x, this.pos.y, width / 8, height / 8, width / 40);
    }
}