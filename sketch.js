const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;

function preload(){
    img=loadImage("polygon.png");
}

function setup(){

    createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(500,680,1000,50);



    layer1= new Ground(400,400,200,20);
    layer2= new Ground(700,300,200,20);

    b1 = new Box(320,360,30,40);
    b2 = new Box(350,360,30,40);
    b3 = new Box(380,360,30,40);
    b4 = new Box(410,360,30,40);
    b5 = new Box(440,360,30,40);
    b6 = new Box(470,360,30,40);

    b7 = new Box(340,300,30,40);
    b8 = new Box(370,300,30,40);
    b9 = new Box(400,300,30,40);
    b10 = new Box(430,300,30,40);

    b11 = new Box(385,270,30,40);
    

    b12 = new Box(620,260,30,40);
    b13 = new Box(650,260,30,40);
    b14 = new Box(680,260,30,40);
    b15 = new Box(710,260,30,40);
    b16 = new Box(740,260,30,40);
    b17 = new Box(770,260,30,40);

    b18 = new Box(640,180,30,40);
    b19 = new Box(670,180,30,40);
    b20 = new Box(700,180,30,40);
    b21 = new Box(730,180,30,40);

    b22 = new Box(690,90,30,40);
    

    


ball = Bodies.circle(50,200,20);
  World.add(world,ball);

slingShot = new SlingShot(this.ball,{x:200,y:200});
    
    
}






function draw(){

    background("aqua");
    
    Engine.update(engine);

    ground.display();
    
    layer1.display();
    layer2.display();

    fill("yellow")
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display()

    fill("blue")
    b7.display();
     b8.display();
     b9.display();
     b10.display();

     fill("orange")
     b11.display();

     fill("pink")
     b12.display();
     b13.display();
     b14.display();
     b15.display();
     b16.display();
     b17.display();
    
    fill("red")
     b18.display();
     b19.display();
     b20.display();
     b21.display();
    
     fill("white")
     b22.display();

   imageMode(CENTER)
  image(img ,ball.position.x,ball.position.y,40,40);

    slingShot.display()

    
}


function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
function mouseReleased(){
    slingShot.fly();
}


function keyPressed(){
  
    if(keyCode === 32){
        slingShot.attach(this.ball);
    }

}
