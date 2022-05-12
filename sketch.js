const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var world, engine;

var boliche;
var porcelana;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var bolicheConfig = {
    restitution: 0.95
  }
  
  boliche = Bodies.circle(100,10,20,bolicheConfig);
  World.add(world, boliche);

  var porcelanaConfig = {
    isStatic: true
  }
   
  porcelana = Bodies.rectangle(200,390,400,20,porcelanaConfig);
  World.add(world, porcelana);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background("grey");
 Engine.update(engine);

 ellipse(boliche.position.x, boliche.position.y, 20);

 rect(porcelana.position.x, porcelana.position.y, 400, 20);
  
}

