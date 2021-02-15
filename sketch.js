//namespacing
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var buttonStart;
var engine, world;
var ball;
var player;
var bgImage
var gameState=0;
var ballGroup;

function preload(){
 bgImage=loadImage("assets/bgimage.jpg");
 bonusBall = loadImage("assets/unnamed.png");
 star = loadImage("assets/star.jpg");
 screen1 = loadImage("assets/screen1.jpg"); 
 screen2 = loadImage("assets/screen2.png");
 ballImg = loadImage("assets/ball.png");

}

function setup() {
  createCanvas(displayWidth, displayHeight);
  
  engine=Engine.create();
  world=engine.world;
  angleMode(DEGREES);  
  buttonStart=createSprite(displayWidth/2, displayHeight-100,100,70);
  buttonStart.visible=false;

  buttonStart1=createSprite(displayWidth-275, displayHeight-125,100,70);
  buttonStart1.visible=false;
   
  ballGroup= new Group();

  player=new Player(displayWidth/2, displayHeight/2)
  //ball=new Ball(Math.round(random(displayWidth/4,displayWidth-100)),Math.round(random(displayHeight/4,displayHeight/2+100)),100,100);
  //createSprite(400, 200, 50, 50);
  
}

function draw() {

  
  Engine.update(engine);
  if(gameState===0){
    background(screen1);
  }
  
  if(gameState===1){
    background(screen2);  
  }
  if(gameState===2){
    background(bgImage);  
  }

  if (keyDown("a")|| keyDown("d") || keyDown("w")|| keyDown("s")){
    player.move();
  
  }

  if(mousePressedOver(buttonStart)){
    gameState=1;
  }

  if(mousePressedOver(buttonStart1)){
    gameState=2;
  }
  
  if(player.isTouching(ballGroup)){
    
  }

  hr = hour();
  mn = minute();
  sc = second();

  //ball.display();
  player.display();
  spawnBalls();
  drawSprites();
}


/*function keyPressed(){
  if (keyCode === 65){
    Matter.Body.setPosition(player.body, {x: x+5, y: y})
  }
}*/


function spawnBalls(){
  if (frameCount%100===0){
    ball=createSprite(10, 10, 100, 100);
    ball.x=Math.round(random(200,displayWidth-200));
    ball.y=Math.round(random(displayHeight/4,displayHeight/2+100));
    ball.addImage(ballImg);
    ball.scale=0.2;
    ball.lifetime=200;
    ballGroup.add(ball);
  }
}
