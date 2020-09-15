var car,wall ; 
var car1,wall1




function setup() {
  createCanvas(800,400);
  
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(100,300,70,50);
  car1 =createSprite(200,250,50,50)
  wall1 =createSprite(150,250,50,50)
  car.shapeColor = "pink";
 wall.shapeColor ="pink";
 car1.velocityX = 5
 wall1.velocityX = -5
}

function draw() {
  background(255,255,255);  
  car.x = mouseX
  car.y = mouseY
  bounceOff(car1,wall1)
  if(isTouching(car,wall)){
car.shapeColor ="red"
wall.shapeColor = "red"

  }
  else if(isTouching(car1,wall1)){
    car1.shapeColor ="red"
    wall1.shapeColor = "red"

  }
  else{
car.shapeColor = "pink"
wall.shapeColor ="pink"

  }
  drawSprites();
}