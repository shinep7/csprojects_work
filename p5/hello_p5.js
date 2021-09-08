function setup(){
  createCanvas(400, 400);
  background(0);
}


let x = 200;

function draw(){
  //background(0);
  fill(0, 0, 255);
  ellipse(x, 200, 100, 50);
  x++;

  if (x > width)
    x = 0;
}

function mousePressed(){
  fill(0, 0, 255);
  ellipse(mouseX, mouseY, 50, 50);
}
