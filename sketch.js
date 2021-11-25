
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
function preload()
{
	
}

function setup() {
	createCanvas(1350, 700);
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ellipseMode(RADIUS)
	ball = Matter.Bodies.circle(200,200,10)
	World.add(world, ball)

	ground = new Ground(675, 650, 1350, 20)
	leftSide = new Ground(1150, 610, 20, 60)
	rightSide = new Ground(950, 610, 20, 60)




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  leftSide.display()
  rightSide.display()
  ellipse(ball.position.x, ball.position.y, 10)
  if(keyDown("UP_ARROW")) {
	console.log("a")
	Matter.Body.applyForce(ball, {x:0,y:0}, {x:0.0007,y:0.0007} )
	
}
}



