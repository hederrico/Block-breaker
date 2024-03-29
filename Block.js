class Block {
  constructor() {
    this.w = 40;
    this.h = 20;
    this.x = random(0 + this.w, width - this.w);
    this.y = random(0 + this.h, height/1.5);
    this.life = random(1, 5);

    this.minX = this.x - this.w/2;
    this.maxX = this.x + this.w/2;
    this.minY = this.y - this.h/2;
    this.maxY = this.y + this.h/2;
  }

  draw(){
    fill(0, 179, 18);
    // fill(9, 0, 179);
    // fill(179, 0, 0);
    rectMode(CENTER);
    rect(this.x,this.y,this.w,this.h);
  }

}
