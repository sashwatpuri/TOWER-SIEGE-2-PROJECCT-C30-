const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint ; 

var ground , stand , base ; 
var block8 , block9 , block10 , block11 , block12 ;
var block13 , block14 , block15 ;
var block16 ;
var block1 , block2 , block3 , block4 ,block5 ; 
var block6 , block7 , block08 ;
var block09 ; 
var polygon , polygonImg ; 

function preload() {
polygonImg = loadImage("polygon.png") ; 
}

function setup(){
 var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    stand = new Ground(390,270,200,10);

    base = new Ground(700,235,200,10);

    block8 = new Box(330,235,30,40);
    block9 = new Box(360,235,30,40);
    block10 = new Box(390,235,30,40);
    block11 = new Box(420,235,30,40);
    block12 = new Box(450,235,30,40);
    block13 = new Box(360,195,30,40);
    block14 = new Box(390,195,30,40);
    block15 = new Box(420,195,30,40);
    block16 = new Box(390,155,30,40);

    block1 = new Box(630,200,30,40);
    block2 = new Box(660,200,30,40);
    block3 = new Box(690,200,30,40);
    block4 = new Box(720,200,30,40);
    block5 = new Box(750,200,30,40);

    block6 = new Box(660,170,30,40);
    block7 = new Box(690,170,30,40);
    block08 = new Box(720,170,30,40);

    block09 = new Box(690,140,30,40);
    var options={
        density:2.5,
        restitution:0.5,
        friction:1.2,
      }

    polygon  = Bodies.circle(50,200,20,options);
    World.add(world,polygon);

    slingShot = new Slingshot(this.polygon,{x:100, y:200});
 
}

function draw(){
    background("white");
    Engine.update(engine);

    ground.display();
    stand.display();
    base.display();

    fill("red");
    block8.display();

    fill("green");
    block9.display();

    fill("blue");
    block10.display();
    fill("purple");
    block11.display();

    fill("pink");
    block12.display();

    fill("yellow");
    block13.display();

    fill("black");
    block14.display();

    fill("grey");
    block15.display();

    fill("lightgreen");
    block16.display();

    fill("red");
    block1.display();

    fill("green");
    block2.display();

    fill("blue");
    block3.display();

    fill("purple");
    block4.display();

    fill("yellow");
    block5.display();

    fill("lightgreen");
    block6.display();

    fill("black");
    block7.display();

    fill("grey");
    block08.display();

    fill("lightblue");
    block09.display();
    
    imageMode(CENTER);
    image(polygonImg , this.polygon.position.x , this.polygon.position.y , 40 , 40);

    slingShot.display();

    drawSprites();

}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX ,y:mouseY});

}

function mouseReleased(){
 slingShot.fly();   
}

function keyPressed(){
 if(keyCode === 32){
     slingShot.attach(this.polygon);
 }        
}