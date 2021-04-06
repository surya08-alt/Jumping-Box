var fixedsprite1,fixedsprite2,fixedsprite3,fixedsprite4;
var movingsprite;
var music;

function preload(){
music-loadsound("music.mp3");
}

function setup(){

  createCanvas(800,600);



movingSprite=createSprite(random(10,750),300,20,20);
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

if(movingsprite.x<0){
music.stop()
movingSprite.velocityX=3}
else if(movingSprite.x>800){
music.stop()
 movingSprite.velocityX=-3
}

if(movingSprite.istouching(fixedsprite4)){
 music.play()
 movingSprite.shapeColor="yellow"
 movingSprite.bounceoff(fixedsprite4);

}

else if(movingSprite.istouching(fixedsprite3)){
  music.stop()
  movingSprite.shapeColor="blue"
  bounceoff(movingSprite,fixedsprite3);
  
  
   if(movingSprite.istouching(fixedsprite2)){
    music.stop()
    movingSprite.shapeColor="green"
    bounceoff(movingSprite,fixedsprite2);
    movingSprite.velocityX=0
    movingSprite.velocityY=0}


    else if(movingSprite.istouching(fixedsprite1)){
      music.stop()
      movingSprite.shapeColor="red"
      bounceoff(movingSprite,fixedsprite1)
    }}

if(movingsprirte.y<0){
music.stop()
movingSprite.velocityY=3
}


drawSprites()

}