var b1 ,  b2, wall;
var speed , speed2,weight,thickness;


function setup() {
  
  
  createCanvas(1600,400);
 b1=createSprite(400, 200, 50, 50);
 speed=random(0,150);
 speed2=random(0,150);
 wall=createSprite(1595,200,thickness,400);
 wall.shapeColor=("gray")
 weight=random(400,1500);
 thickness=random(0,50);
 b1.velocityX=speed;
 b1.shapeColor=("white");
 b2=createSprite(400,300,50,50);
 b2.velocityX=speed2;
 b2.shapeColor=("white");
}

function draw() {
  hascollided();
  if(hascollided(b1,wall)){
    b1.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  if(hascollided(b2,wall)){
    b2.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }

 }
 function hascollided(b1,wall){
   b1RightEdge=b1.x+b1.width;
   wallLeftEdge=wall.x;
   if(b1RightEdge>wallLeftEdge){
     return true
   }
   return false
 }
 function hascollided2(b1,wall){
  b1RightEdge=b2.x +b2.width;
  wallLeftEdge=wall.x;
  if(b2RightEdge>wallLeftEdge){
    return true
  }
  return false
}



