var thickness, wall;
var bullet, speed , weight;
function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  bullet = random(22,83)
  weight = random(30,52);
  car = createSprite(50, 200, 50, 50);
  
  //car.debug = true;
  wall = createSprite(1200, 200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  //wall.debug = true;

  car.velocityX = speed;
 
}



function draw() {
  background(255,255,255);  
  drawSprites();

checkCollision();
if( hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10){
    wall.shapeColor=color(255,0,0);
  } 
if(damage<10){
  wall.shapeColor(0,255,0)
}







}
}
function checkCollision(){
if(wall.x-car.x < (car.width+wall.width/2))
{
  car.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22509;
if(deformation>180)
{
  car.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100)
{
  car.shapeColor=color(230,230,0);
}
if(deformation<100)
{
  car.shapeColor=color(0,250,0);
}
}



}
function hasCollided(bullet,wall){
bulletRightEdge= bullet.x +bullet.width;
wallLeftEdge= wall.x;
if(bullet.RightEdge>=wallLeftEdge){
  return true;
}
return false;




}