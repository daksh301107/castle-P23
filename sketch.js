const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
//var ground1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new RECT(65,280,20,400);
    box2 =new RECT(100,380,30,500);
    box3=new RECT(135,380,30,450);
    box4=new RECT(170,380,30,400);
    box5=new RECT(205,380,30,450);
    box6=new RECT(240,380,30,500);
    box7=new RECT(275,380,20,600);
    
   
  //ground1=new RECT(200,385,400,20);
}

function draw(){
    background("green");
    circle (100,120,30);
    circle (240,120,30);
    triangle (180,160,150,180,195,180);
    triangle.scale =0.01;
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    //ground1.display();
}
