const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

var particles = []
var plinkos = []
var divisions = []
//console.log(particles)
var divisionHeight = 300


function setup() {
    createCanvas(480,700);
    engine = Engine.create();
    world = engine.world;

particle1 = new Particle(200,200,20,20)

platform = new Platform(width/2,height,width,10)

platform1 = new Platform(0,550,10,400)
platform2 = new Platform(80,550,10,400)
platform3 = new Platform(160,550,10,400)
platform4 = new Platform(240,550,10,400)
platform5 = new Platform(320,550,10,400)
platform6 = new Platform(400,550,10,400)
platform7 = new Platform(480,550,10,400)

  //row 1
  plinko1 = new Ground(50,75)
  plinko2 = new Ground(100,75)
  plinko3 = new Ground(150,75)
  plinko4 = new Ground(200,75)
  plinko5 = new Ground(250,75)
  plinko6 = new Ground(300,75)
  plinko7 = new Ground(350,75)
  plinko8 = new Ground(400,75)
  //row 2
  plinko9 = new Ground(75,125)
  plinko10 = new Ground(125,125)
  plinko11 = new Ground(175,125)
  plinko12 = new Ground(225,125)
  plinko13 = new Ground(275,125)
  plinko14 = new Ground(325,125)
  plinko15 = new Ground(375,125)
  plinko16 = new Ground(425,125)
//row 3
  plinko17 = new Ground(50,175)
  plinko18 = new Ground(100,175)
  plinko19 = new Ground(150,175)
  plinko20 = new Ground(200,175)
  plinko21 = new Ground(250,175)
  plinko22 = new Ground(300,175)
  plinko23 = new Ground(350,175)
  plinko24 = new Ground(400,175)
//row 4
plinko25 = new Ground(75,225)
plinko26 = new Ground(125,225)
plinko27 = new Ground(175,225)
plinko28 = new Ground(225,225)
plinko29 = new Ground(275,225)
plinko30 = new Ground(325,225)
plinko31 = new Ground(375,225)
plinko32 = new Ground(425,225)



//particle1 = new Particle(200,200)
  }
  
  function draw() {
    background("skyblue"); 
  //  particle1.display(); 
    platform.display();
  
platform1.display();
platform2.display();
platform3.display();
platform4.display();
platform5.display();
platform6.display();
platform7.display();

  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();

  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();

  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display(); 
  
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();
  plinko31.display();
  plinko32.display(); 


  if(frameCount % 90 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
    particles.push(particle = new Particle(random(width/2-10,width/2+10),10,10))
particle.display()
 }

  for(var j = 0; j > particles.lenght; j++){
particles[j].display();

  }

  


  //spawnparticles()
  //spawnParticles()
    //drawSprites();
  }
