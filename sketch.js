var bullet, wall;
var speed, thickness, weight;

function setup() {
  createCanvas(1600, 400);

  speed = random(223, 321);
  thickness = random(22, 83);
  weight = random(30, 52)

  bullet  = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 30, height/2);
  wall.shapeColor = (80,80,80);

}

function draw() {
  background(255,255,255);

  bullet.velocityX = speed;

  wall.width = thickness;
  
  if (hasCollided(bullet, wall)){
    bullet.velocityX = 0;

    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (damage>10){
      bullet.shapeColor = color(225, 0, 0);
    }

    if (damage<10){
       bullet.shapeColor = color(0, 225, 0);
    }
  }

  drawSprites();
}

function hasCollided(object1, wall){

  bulletRightEdge = object1.x + object1.width;
  wallLeftEdge = wall.x

  if (bulletRightEdge >= wallLeftEdge){
    return true;
  } else{
    return false;
  }

}