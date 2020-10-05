
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var options={
isStatiic:false,
restitution:0.3,
friction:0.5,
density:1.2}
var wall1,wall2,wall3

var wall1=createsprite(200,200,10,50);
var	wall2=createsprite(200,240,10,50);
var	wall3=createsprite(200,210,10,50);



function preload()
{
	
		
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}


function keyPressed(){
if (keyCode===UP_ARROW){
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,Y:-85});



}

}
