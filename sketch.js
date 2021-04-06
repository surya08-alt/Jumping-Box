var fixedsprite1,fixedsprite2,fixedsprite3,fixedsprite4;
var movingsprite;
var music;

function preload(){
music-loadSound("");
}

function setup(){

  createCanvas(800,600);



movingSprite=createSprite(Math.round(random(10,750)),300,20,20);
movingsprite.shapeColor-"white";
movingSprite.X=3;
movingSprite.velocityY-3;


fixedsprite1-createSprite(100,580,180,30);
fixedsprite1.shapeColor-"red";


fixedsprite2-createSprite(300,580,180,30);
fixedsprite2.shapeColor-"green";


fixedsprite3-createSprite(500,580,180,30);
fixedsprite3.shapeColor-"blue";

fixedsprite4-createSprite(700,580,180,30);
fixedsprite4.shapeColor-"yellow";
}


function draw() {
background(rgb(10,10,10))

if(movingSprite.x<0){
music.stop()
movingSprite.velocityX=3}
else if(movingSprite.x>800){
music.stop()
 movingSprite.velocityX=-3
}

if(movingSprite.isTouching(fixedsprite4)&&movingSprite.bounceOff(fixedsprite4)){
 music.play()
 movingSprite.shapeColor="yellow"
}

else if(movingSprite.isTouching(fixedsprite3)&&movingSprite.bounceOff(fixedsprite3)){
  music.stop()
  movingSprite.shapeColor="blue"
}
  
   if(movingSprite.isTouching(fixedsprite2)&&movingSprite.bounceOff(fixedsprite2)){
    music.stop()
    movingSprite.shapeColor="green"
    movingSprite.velocityX=0
    movingSprite.velocityY=0}


    else if(movingSprite.isTouching(fixedsprite1)&&movingSprite.bounceOff(fixedsprite1)){
      music.stop()
      movingSprite.shapeColor="red"
    }

if(movingSprirte.y<0){
music.stop()
movingSprite.velocityY=3
}


drawSprites()

}
