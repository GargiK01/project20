var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  movingRect.shapeColor="pink"
  fixedRect=createSprite(350,250,40,40);
  fixedRect.shapeColor="pink"
}

function draw() {
  background(0); 
  movingRect.x=mouseX; 
  movingRect.y=mouseY; 
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
  fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
  movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
  fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="purple"
    fixedRect.shapeColor="purple"
  }else{
    movingRect.shapeColor="pink"
    fixedRect.shapeColor="pink"
  }
  drawSprites();
}