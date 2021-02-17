
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
ground = new Dustbin(400,650,800,10)
paper1 = new Paper(200,500,20,20)
dustbin1 = new Dustbin(600,600,10,100)
dustbin2 = new Dustbin(680,600,10,100)
dustbin3 = new Dustbin(640,640,70,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display(

  )
  ground.display()

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:15,y:-20})
	}
}

