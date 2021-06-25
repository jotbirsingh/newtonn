
const Engine = Matter.Engine;
const World= Matter.World;
const Constraint=Matter.Constraint;
const Render=Matter.Render;
const Bodies = Matter.Bodies;
const Body=Matter.Body;

var engine, world;
var bob1,bob2;
var roof;
var bobDiameter=40;
var ground1;

function setup(){
    var canvas = createCanvas(1600,1200);
    engine = Engine.create();
    world = engine.world;

    roof = new Roof(400,20,3000,20);
    bob1 = new Bob(1100,50,bobDiameter);
    bob2=new Bob(1200,50,bobDiameter);
bob3 = new Bob(1300,50,bobDiameter);
bob4 = new Bob(1400,50,bobDiameter);
bob5 = new Bob(1500,50,bobDiameter);

    
    rope1=new Rope(bob1.body,roof.body,-bobDiameter*2,0);
    rope2=new Rope(bob2.body,roof.body,-bobDiameter*1,0);
    rope3=new Rope(bob3.body,roof.body,-bobDiameter,0,0);
    rope4=new Rope(bob4.body,roof.body,-bobDiameter*1,0);
    rope5=new Rope(bob5.body,roof.body,-bobDiameter*2,0);

    //ground1 = new Ground(200,490,600,20);
   
}

function draw(){
    background(0);
    Engine.update(engine);
    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();

    //ground1.display();
   roof.display();
}
function keyPressed(){
    if(keyCode === 32){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:230,y:0})
}
}