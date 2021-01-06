const Engine = Matter.Engine;
const World =  Matter.World;
const Bodies = Matter.Bodies;

var world,engine
var ground,box


function setup(){
var canvas = createCanvas(400,400);

engine = Engine.create();
world = engine.world ;

box1 = new Box(200,300,50,50);

box2 = new Box(200,240,100,50);

ground = new Ground(200,390,400,20);


}
function draw(){
background ("black");
 Engine.update(engine);
 
box1.display();
box2.display();
ground.display();
}