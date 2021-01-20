const Engine = Matter.Engine;
const World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;


  var rain1=[];
  var man1;


function preload(){
    thunder1=loadImage("images/thunderbolt/1.png");
    thunder2=loadImage("images/thunderbolt/2.png");
    thunder3=loadImage("images/thunderbolt/3.png");
    thunder4=loadImage("images/thunderbolt/4.png");
  
   
}

function setup(){
    createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    man1=new Man (400,630);
    
   
    
    
}

function draw(){
    background("black");
    Engine.update(engine);

    if(frameCount%50===0){
     thunder10=createSprite(random(80,720),random(5,50));
    rand=Math.round(random(1,4))
    switch(rand){
      case 1:thunder10.addImage(thunder1);
      break;
      case 2:thunder10.addImage(thunder2);
      break;
      case 3:thunder10.addImage(thunder3);
      break;
      case 4:thunder10.addImage(thunder4);8
      break;
      default:break;
      
    }
    thunder10.lifetime=30;
  }

  if(frameCount % 150 === 0){
      rain1.push(new Rain(random(15,795),(15,795)));
  }

  for(var i=0;i<rain1.length;i++){
    rain1[i].display();
  }

    man1.display();
    drawSprites();

}   

