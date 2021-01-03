
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var survivalTime = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  monkeyStanding = loadImage("monkey_collided.png");

  /*monkeyStanding = loadImage("sprite_1.png");*/
}



function setup() {
createCanvas(400,400)  

  
  
monkey = createSprite(80,315,20,20);  
monkey.addAnimation("AMonkeyIsAMonkey",monkey_running);   
monkey.scale = 0.1;  

ground = createSprite(400,425,900,300);  
ground.velocityX = -2;  
ground.height = ground.height/2;
ground.shapeColor = "green";


bananaGroup = new Group();
obstacleGroup = new Group();




}


function draw() {
background("white");

 stroke("green"); 
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:  "+ survivalTime,100,50);
  
if(ground.x<0){
  ground.x = ground.width/2
} 
  
if(keyDown("space") && monkey.y>=316){
    monkey.velocityY = -12;
     
}     
  monkey.velocityY = monkey.velocityY + 0.8; 
  console.log(monkey.y)
  
  monkey.collide(ground);
  
  FoodCourt();
  creatngObstacles();
  
 if(obstacleGroup.isTouching(monkey)){
     ground.velocityX = 0;
    
    var blocker = createSprite(170,50,195,40); 
  blocker.shapeColor = "white" ;
   
/*var monkey2 = createSprite(80,315,20,20);
    
  monkey2.addImage("collided", monkeyStanding);   
  monkey2.scale = 0.1;   

   var magician = createSprite(70,315,80,70); 
  magician.shapeColor = "white" ;*/  
   
   
   
   obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    
   monkey.addImage("joined", monkeyStanding); 
   
   
   obstacleGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1); 
 
    bananaGroup.destroyEach(0);
    obstacleGroup.setVisibleEach(false);
 } 
  
  drawSprites();  
  

}

function FoodCourt(){
  
  if (frameCount % 80 == 0 ){
   banana = createSprite(200,150,20,20);  
  banana.y = Math.round(random(126,200));  
  banana.addImage(bananaImage); 
  banana.scale = 0.1;
  banana.velocityX = -5;
  banana.lifetime = 350;
  bananaGroup.add(banana);
  
  }
   
}

function creatngObstacles(){
if (frameCount % 300 == 0 ){
   obstacle = createSprite(200,330,20,20);

  obstacle.addImage(obstacleImage); 
  obstacle.scale = 0.1;
  obstacle.velocityX = -3;
  obstacleGroup.add(obstacle);

} 

}
