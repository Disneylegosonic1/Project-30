const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var ground;
var stand1, stand2;
var polygon;
var slingshot;




function setup() {
  var canvas = createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;


  block1 = new Box(600, 255, 30, 40);
  block2 = new Box(570, 255, 30, 40);
  block3 = new Box(540, 255, 30, 40);
  block4 = new Box(510, 255, 30, 40);
  block5 = new Box(630, 255, 30, 40);
  block6 = new Box(660, 255, 30, 40);
  block7 = new Box(690, 255, 30, 40);
  block8 = new Box(600, 215, 30, 40);
  block9 = new Box(570, 215, 30, 40);
  block10 = new Box(540, 215, 30, 40);
  block11 = new Box(630, 215, 30, 40);
  block12 = new Box(660, 215, 30, 40);
  block13 = new Box(600, 175, 30, 40);
  block14 = new Box(570, 175, 30, 40);
  block15 = new Box(630, 175, 30, 40);
  block16 = new Box(600, 135, 30, 40);
  

  ground = new Ground(600, 380, 1200, 10);

  stand1 = new Ground(600, 280, 210, 10);
  

  polygon = new Polygon(200, 270, 23, 23);

  slingshot = new SlingShot(polygon.body, {x:200, y:260});


  
  
}

function draw() {
  background("brown");
  Engine.update(engine);  
  console.log(polygon.body.position);


  drawSprites();
  ground.display();
  polygon.display();
  slingshot.display();
  stand1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();


  

}



function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY})
  }
  

function mouseReleased(){
  slingshot.fly();
  }

function keyPressed() {
    if (keyCode === 32) {
      slingshot.attach(this.polygon);
    }
  }