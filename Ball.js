class Ball {
  constructor() {
    this.x = width/2;
    this.y = height/2;
    this.side = [1, -1];
    this.velocity = [3, 4, 5];
    this.yspeed = random(this.side)*random(this.velocity);
    this.xspeed = random(this.side)*random(this.velocity);
    this.radius = 10;
    this.history = [];
  }

  update() {
    this.x += this.xspeed;
    this.y += this.yspeed;

    if ((this.x <= 0) || (this.x >= width)) {
      this.xspeed *= -1.05;
    }

    if ((this.y <= 0)) {
      this.yspeed *= -1.05;
    }

    if ((this.y >= height)) {
      this.x = width / 2;
      this.y = height / 2;
      this.yspeed = random(this.side)*random(this.velocity);
      this.xspeed = random(this.side)*random(this.velocity);
    }

    var vector = createVector(this.x,this.y)
    this.history.push(vector);

    if (this.history.length > 11) {
      this.history.splice(0, 1);
    }
  }

  draw(){
    fill(255);
    noStroke();
    ellipseMode(CENTER);
    ellipse(this.x,this.y, this.radius);

    for (var i = 0; i < this.history.length; i++) {
      var pos = this.history[i];
      fill(255, i*4);
      ellipse(pos.x,pos.y, i*1.2, i*1.2);
    }
  }


  colision(bars, blocks){
    for (var i = 0; i < bars.length; i++) {
      if ((abs(this.x - bars[i].x) <= bars[i].w) && (abs(this.y - bars[i].y) <= this.radius)) {
        this.yspeed *= -1.05;
      }
    }
  }

}
