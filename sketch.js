const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var divisions =[];
var divisionHeight=300;
var particles = [];
var plinkos = [];

var score =0;
function setup() {
  createCanvas(723, 650);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,650,800,20);

  //create division objects
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/4, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,275));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }
  //create 3rd row of plinko objects

  
  //create 4th row of plinko objects


  //create particle objects
  
    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score: "+score,900,50)
 
  drawSprites();

  Engine.update(engine);
  ground.display();
  
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  if (frameCount %60 === 0){
    particles.push(new Partical(random(width/2-30, width/2+30),10,10));
  }

  for (var h = 0; h<particles.length; h++){
    particles[h].display();
  }
  

  //display the plinkos 
  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();   
  }
   

  //display the paricles 

}