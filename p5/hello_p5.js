function setup(){
  createCanvas(400, 400);
}

let x = 200;

function draw(){
  background(0);
  fill(0, 0, 255);
  ellipse(x, 200, 100, 50);
  x++;

  if (x > width)
    x = 0;
}

function mousePressed(){
  fill(random(255), random(255), random(255));
  ellipse(mouseX, mouseY, 50, 50);
}
