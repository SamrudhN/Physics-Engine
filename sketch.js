//const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world;
var ground;
var ball;
function setup() {
  var canvas=createCanvas(400,400);

  var ground_options={isStatic: true};

  engine=Matter.Engine.create();
  world=engine.world;
  ground=Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);
  console.log(ground.position.x);
  console.log(ground.position.y);
  var ball_options={restitution:1.0};
ball=Bodies.circle(200,200,20,ball_options);
World.add(world,ball);

}

function draw() {
  background(0); 
  Matter.Engine.update(engine);
fill("green");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20); 
  fill("red");
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20);
  drawSprites();
}