var canvas;
var music;
var S1,S2,S3,S4;
var box;



function preload(){

 music = loadSound("music.mp3");
}


function setup(){

canvas = createCanvas(800,500);

    //create 4 different surfaces
    S1=createSprite(100,470,170,30);
    S1.shapeColor="pink";
    S2=createSprite(300,470,170,30);
    S2.shapeColor="blue";
    S3=createSprite(500,470,170,30);
    S3.shapeColor="orange";
    S4=createSprite(700,470,170,30);
    S4.shapeColor="yellow";

    //create box sprite and give velocity
    box=createSprite(Math.round(random(20,750)),20,40,40);
    box.shapeColor="white";
    box.velocityY=6;
    box.velocityX=5;

    
}

function draw() {
background(rgb(109,300,209));

    //create edgeSprite
    if(box.x>=798){
    box.velocityX=box.velocityX*(-1);
    }
    
    if(box.x<0){
    box.velocityX=box.velocityX*(-1);
    }

    if(box.y<=0){
    box.velocityY=box.velocityY*(-1);
    }

    //condition to check if box is touching surface and bounces off
    if(S1.isTouching(box) && box.bounceOff(S1)){
        box.shapeColor="pink";
        music.play();
    }

    if(S2.isTouching(box) && box.bounceOff(S2)){
        box.shapeColor="blue";
    }

    if(S4.isTouching(box) && box.bounceOff(S4)){
        box.shapeColor="yellow";
    }

    if(S3.isTouching(box) && box.bounceOff(S3)){
        box.shapeColor="orange";
        box.velocityY=0;
        box.velocityX=0;
        music.stop();

    }
     
     drawSprites();
    
}
