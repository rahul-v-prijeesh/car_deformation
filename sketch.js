var car,wall;
var speed,weight

function setup() {
 createCanvas(1600,400)
 car=createSprite(50, 200, 50, 50);
 wall=createSprite(1600, 200, 60,height/2 );
 car.shapeColor="white";
 speed=random(55,90);
 weight=random(400,1500);
}

function draw() {
  background("black");  
  //car.x=mouseX; 
  car.velocityX=speed;
  
  if(wall.x-car.x<car.width/2+wall.width/2)
  {
  car.velocityX=0;
 var deform=(0.5*weight*speed*speed)/22500;
  //car.shapeColor="blue";
  if(deform<100)
{
  car.shapeColor=color(0,255,0);
}
if(deform>100&&deform<180)
{
  car.shapeColor=color(230,230,0);
}
if(deform>180)
{
  car.shapeColor=color(255,0,0);
}
 
  }
 else{
   car.shapeColor="white"; 
 }

 

  drawSprites();
}