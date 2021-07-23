var box;
function setup() {
  createCanvas(1200,1200);
  box = createSprite(200,200,30,30);
}


function draw() 
{
  background("black");
  drawSprites();
  if (keyDown("up")){
    box.position.y = box.position.y-4;
  }
  if (keyDown("down")){
    box.position.y = box.position.y+4;
  }
  if (keyDown("right")){
    box.position.x = box.position.x+4;
  }
  if (keyDown("left")){
    box.position.x = box.position.x-4;
  }
}




