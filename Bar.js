class Bar {
  constructor(x, y, w) {
    this.x = x;
    this.y = y;
    this.h = 10;
    this.w = w;
  }


  update(){
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      this.x += 4;
    } else if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      this.x -= 4;
    }


    if (this.x - (this.w / 2) <= 0) {
      this.x = this.w / 2;
    } else if (this.x + (this.w / 2) >= width) {
      this.x = width - (this.w / 2)
    }
  }


  draw(){
    rectMode(CENTER);
    fill(255);
    rect(this.x, this.y, this.w, this.h);
  }
}
