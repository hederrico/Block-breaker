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

  var block = new Block();
  blocks.push(block);

}

function draw(){
  background(0);

  for (var i = 0; i < bars.length; i++) {
    bars[i].update();
    bars[i].draw();
  }

  for (var i = 0; i < blocks.length; i++) {
    blocks[i].draw();
  }

  for (var i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].colision(bars, blocks);
    balls[i].draw();
  }
}
