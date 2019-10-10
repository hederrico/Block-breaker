var bars = [];
var balls = [];
var blocks = [];

function setup(){
  var canvas = createCanvas(600, 800);
  // canvas.position(displayWidth/3, 0);
  background(0);

  var bar = new Bar(width / 2, height - 30, 60);
  bars.push(bar);

  var ball = new Ball();
  balls.push(ball);

  for (var i = 0; i < 10; i++) {
    blocks[i] = new Block();
  }

}

function draw(){
  background(0);


  for (var i = 0; i < bars.length; i++) {
    bars[i].update();
    bars[i].draw();
  }

  for (var i = 0; i < blocks.length; i++) {
    blocks[i].draw();

    for (var j = 0; j < balls.length; j++) {

      var closestPoint = createVector(clamp((blocks[i].x - blocks[i].w/2), (blocks[i].x + blocks[i].w/2), balls[j].x), clamp((blocks[i].y - blocks[i].h/2), (blocks[i].y + blocks[i].h/2), balls[j].y));

      balls[j].blockCollision(closestPoint, blocks[i]);
    }

  }

  for (var i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].barCollision(bars, blocks);
    balls[i].draw();

  }
}

function clamp(min, max, value) {
  if (value < min) {
    return min;
  } else if(value > max) {
    return max;
  } else {
    return value;
  }
}
