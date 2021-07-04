var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg
var orangeL , orangeLImg
var leaf , leafImg




function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
appleImg=loadImage('apple.png')
orangeLImg=loadImage('orangeLeaf.png')
leafImg = loadImage ('leaf.png') 
}



function setup(){
  
  createCanvas(400,400);
 
  


// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);




//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}




function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX
  drawSprites();
  var rand = Math.round(random(1,3))
  if (frameCount%80===0){
    if ( rand === 1 ) {
    Apples ()
    }
  else if (rand===2){
    orangeLeaf()
  }
  else {
    leaves ()
  }
  }
}



function Apples () {
  apple = createSprite (random(50,350),10,10,10)
  apple.addImage(appleImg)
  apple.velocityY = 10 
  apple.scale = 0.07
}



function orangeLeaf () {
  orangeL = createSprite (random(50,350),10,10,10)
  orangeL.addImage(orangeLImg)
  orangeL.velocityY = 10 
  orangeL.scale=0.07
}




function leaves () {
  leaf = createSprite (random(50,350),10,10,10)
  leaf.addImage(leafImg)
  leaf.velocityY = 10 
  leaf.scale=0.07
}








