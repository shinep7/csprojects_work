function setup() {
  createCanvas(400, 400);
}

let x = 50;

function draw() {
  background(0);
  fill(0, 0, 255);
  ellipse(x, 200, 100, 50);
  x++;

  if (x > width+50)
    x = -50;
}
