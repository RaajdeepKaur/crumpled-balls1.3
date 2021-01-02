const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);
   engine = Engine.create();
   world = engine.world;
  
   // Create the Bodies Here. 
   
  var ground = Bodies.rectangle(750,200,400,20,{isStatic : true});
  ground = createSprite(400,380,800,10);
  ground.shapeColor = color(0);
  World.add(world,ground);


  var bucket1 = Bodies.rectangle(750,375,100,20);
  bucket1 = createSprite(675,370,200,20);
  bucket1.shapeColor = color("blue");
  World.add(world,bucket1);


  var bucket2 = Bodies.rectangle(650,370,20,80);
  bucket2 = createSprite(585,330,20,100);
  bucket2.shapeColor = color("blue");
  World.add(world,bucket2);

  
  var bucket3 = Bodies.rectangle(770,330,20,80);
  bucket3 = createSprite(770,330,20,100);
  bucket3.shapeColor = color("blue");
  World.add(world,bucket3);


  var ball = Bodies.circle(50,375,50);
  ball = createSprite(50,375,25,10);
  ball.shapeColor = color("pink");
  World.add(world,ball);

     Engine.run(engine);
   
}

function draw() {
  rectMode(CENTER);
  background("yellow");
  
  
  drawSprites();
}

function keyPresseed(){
  if(keyCode == UP_ARROW){

    Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:85,y:-85})
  }
}