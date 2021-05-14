const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var canvas;
var edges;

var wires,wallImg,Emergency,UploadWall,Tasks,downloadarrow,GarbageWall,WireWall,
Garbage,upload,download,imposter,blue,white,green,sprite,wires;
var crew,crew1;
var edges;

function preload(){

  
   wall_img=loadImage("Map.png");
   emergency_img=loadImage("emergency button.png");
   upload1_img=loadImage("UPLOAD wall.png");
   tasks_img=loadImage("Task0.png");
   downloadarrow_img=loadImage("download arrow.png");
   garbagewall1_img=loadImage("garbage wall.png");
   wirewall1_img=loadImage("wirewall.png");
   garbage_img=loadImage("garbage task.png");
   upload2_img=loadImage("upload.png");
   download1_img=loadImage("download.png");
   imposter1_img=loadImage("Imposter.png");
   blue_img=loadImage("Blue.png");
   white_img=loadImage("White.png");
   green_img=loadImage("Green.png");
   wirewall_img=loadImage("wirewall.png")
   
    spritefront_img=loadImage("ChacterFront (red).png");
    spriteleft_img=loadImage("Character left red.png");
    spriteright_img=loadImage("character right red.png")
    spriteback_img=loadImage("Character back red.png");

    wires1_img = loadImage("Wires.png");
    wires2_img=loadImage("wires 2.png");

    victory_sound=loadSound("Sound Track/Victory Crew.mp3");
    victory_img=loadImage("Victory.png");
}

function setup(){
    canvas = createCanvas(400,400);
    engine = Engine.create();
    world=engine.world;


  crew = createSprite(200, 200);
  crew.addImage(spritefront_img);

  var wall = createSprite(200,200);
  wall.addImage(wall_img);
  wires = createSprite(30, 372,20,20);
  wires.addImage(wires2_img);
 
  var downloadarrow = createSprite(40, 30);
  downloadarrow.addImage(downloadarrow_img);
  var Emergency = createSprite(200,350);
  Emergency.addImage(emergency_img);
  var WireWall = createSprite(30, 372);
  WireWall.addImage(wirewall_img);
  var download = createSprite(22, 19);
  download.addImage(download1_img);
  var Garbage = createSprite(372, 9);
  Garbage.addImage(garbage_img); 
  var GarbageWall = createSprite(372, 9);
  GarbageWall.addImage(garbagewall1_img);
  var upload = createSprite(374, 382);
  upload.addImage(upload1_img);
  var UploadWall = createSprite(374, 382);
  UploadWall.addImage(upload2_img);
  var blue = createSprite(58, 123);
  blue.addImage(blue_img);
  var white = createSprite(352, 270);
  white.addImage(white_img);
  var green = createSprite(200, 340);
  green.addImage(green_img);
  var imposter = createSprite(65, 192);
  imposter.addImage(imposter1_img);
  var Tasks = createSprite(198, 79);
  Tasks.addImage(tasks_img);

  crewGroup1=new Group();
  crewGroup2=new Group();
}

function draw(){
background("gray");
crew.velocityX=0;
crew.velocityY=0;

if(keyDown("right")){
    crew.velocityX=2;
    crew.velocityY=0;
    crew.addImage(spriteright_img);
}

if (keyDown("left")) {
    crew.velocityX=-2;
    crew.velocityY=0;
    crew.addImage(spriteleft_img);
}

 if (keyDown("up")) {
    crew.velocityY=-2;
    crew.velocityX=0;
    crew.addImage(spriteback_img);
}
  if (keyDown("down")) {
    crew.velocityY=2;
    crew.velocityX=0;
    crew.addImage(spritefront_img);
}


edges = createEdgeSprites();
crew.bounceOff(edges); 



if (crew.isTouching(wires)) {
    crew.destroy();
    createCrew1();
     
  }

 if(mousePressedOver(crew1)){
   Reset();
 }

Engine.update(engine);
drawSprites();
}

function createCrew1(){
    crew1 = createSprite(200, 200,50,60);
    crew1.addImage(victory_img);
    crew1.lifetime=100;
    crewGroup1.add(crew1);
    
    }

  function Reset(){
    clear();
    crew2 = createSprite(200, 200,50,60);
    crew2.addImage(spritefront_img);

    wires2 = createSprite(30, 372,20,20);
    wires2.addImage(wires2_img);


  }