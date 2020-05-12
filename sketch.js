const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var engine;
var world;
var box,box1,box2,box3,stone,stone,stone ;
 
var ground;
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  box  = new Box(350,300,50,300);
  box1 = new Box(300,300,50,250);
  box2 = new Box(250,300,50,200);
  box3 = new Box(200,300,50,150);
  box4 = new Box(600,300,50,350);
  stone  = new Stone(400,300,50,300);
  stone1 = new Stone(450,300,50,250);
  stone2 = new Stone(500,300,50,200);
  stone3 = new Stone(550,300,50,150);
  stone4 = new Stone(150,300,50,350);
  box5 = new Box1(375,0,50);
  

  ground = new Ground(400,390,800,20);
}
function draw() {
  Engine.update(engine);
  background(0);  
  
  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  stone.display();
  stone1.display();
  stone2.display();
  stone3.display();
  stone4.display();

  box5.display(428,80,325,80,375,5);




  ground.display();
}