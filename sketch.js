const Engine= Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var engine,mybody,world;
var ground;

function setup() {
  createCanvas(400,400);
engine=Engine.create();
world=engine.world;
var mybodyoption={restitution:1};
mybody=Bodies.circle(200,200,20,mybodyoption);
World.add(world,mybody);
var groundoptions={isStatic:true};
ground=Bodies.rectangle(200,390,400,20,groundoptions);
World.add(world,ground);
  
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(mybody.position.x,mybody.position.y,20,20);
}
