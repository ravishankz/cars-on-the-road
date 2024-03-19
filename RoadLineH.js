class RoadLineH {
    constructor(offsetY, roadLineHPosition, roadLineHVelocity) {
      this.offsetY = offsetY / height * 400;
      this.roadLineHPosition = roadLineHPosition;
      this.roadLineHVelocity = roadLineHVelocity;
    }
    
    display() {
      this.roadLineHPosition.add(this.roadLineHVelocity);
      rectMode(CORNER);
      stroke(0);
      strokeWeight(0);
      fill(roadColor);
      rect(this.roadLineHPosition.x, this.roadLineHPosition.y + this.offsetY, roadLineVWidth + 2, roadLineHHeight);
      
      if (this.roadLineHPosition.y + this.offsetY > height) {
        this.roadLineHPosition.y = -roadLineHHeight - this.offsetY;
      }
    }
}