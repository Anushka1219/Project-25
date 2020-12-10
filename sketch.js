
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1;
var ground1, ball1;


function setup() {
	createCanvas(1400, 600);


	engine = Engine.create();
	world = engine.world;

	

	
ground1 = new Ground(700,550,1400,30);

	

  ball1 = new Ball(200,300)

  bin1 = new Box(1100,450);


	Engine.run(engine);
  
}


function draw() {
 
  background("skyblue");

 
  
  ball1.display();
  ground1.display();
  bin1.display();



  if(keyDown("space")){
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:30,y:-30})
  }
  
  
  drawSprites();

  textSize(20);
 fill("purple");
  text("Press Space to throw the wrapper in dustbin",20,100);
}



