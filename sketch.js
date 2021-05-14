const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var canvas;
var edges;

var wires,wallImg,Emergency,UploadWall,Tasks,downloadarrow,GarbageWall,WireWall,
Garbage,upload,download,imposter,blue,white,green,sprite,wires;
var crew;

function preload(){
  wires1_img = loadImage("Wires.png");
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
  spritefront_img=loadImage("ChacterFront (red).png");
  spriteleft_img=loadImage("Character left red.png");
  spriteright_img=loadImage("character right red.png")
  spriteback_img=loadImage("Character back red.png");
  wires2_img=loadImage("wires 2.png");
  wirewall_img=loadImage("wirewall.png")
}

function setup(){
  canvas = createCanvas(400,400);
  engine = Engine.create();
  world=engine.world;

  //createCanvas(displayWidth,displayHeight-130);
  var wall = createSprite(200,200);
  wall.addImage(wall_img);
  //console.log("wall.y");
  //var wires = createSprite(200, 200);
  //wires.addImage(wires1_img);
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

  var wires = createSprite(30, 372);
  wires.addImage(wires2_img);
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
  

}

function draw(){
  background("Gray");  
  
  imposter.velocityY=-4;

  //if (keyDown("right")) {
  //  crew.velocityX = 2;
   // crew.velocityY = 0;
  
  //}

  //if (keyDown("left")) {
   // sprite.x = sprite.x-8;
   // sprite.addImage( spriteleft_img);
 // }
 // if (keyDown("up")) {
   // sprite.y = sprite.y+8;
   // sprite.addImage(spriteback_img);
  //}
  //if (keyDown("down")) {
   // sprite.y = sprite.y-8;
   // sprite.addImage(spritefront_img);
 // }


edges=createEdgeSprites();
//crew.bounceOff(edges);
//imposter.bounceOff(edges);
//imposter.bounceOff(edges);
//green.bounceOff(edges);
//blue.bounceOff(edges);
//white.bounceOff(edges);
//crew.bounceOff(Emergency);
//crew.bounceOff(wires);
//crew.bounceOff(imposter);
//crew.bounceOff(UploadWall);
//crew.bounceOff(WireWall);
//crew.bounceOff(download);
//crew.bounceOff(upload);
//crew.bounceOff(Garbage);
//crew.bounceOff(GarbageWall);


Engine.run(engine);
 

  drawSprites();
}