var fox;
var road;
var rocks;
var startingbg;

var gameState = "end";

var lifeSpan;

let engine;
let world;


function preload()
{
    foxImg = loadImage("fox.png");
    roadImg = loadImage("road.jpg");
    rocksImg = loadImage("rockobstacle.png");
    startingbg = loadImage("startingbg1.webp");
    lifeImg = loadImage("lifespan.png");
    
}



function setup()
{
    createCanvas(windowWidth, windowHeight);


    road = createSprite(displayWidth/2,windowHeight-300,windowWidth,1);
    road.addImage("road",roadImg);
    road.velocityX = -2;
    road.scale = 6.2;
    road.x = windowWidth/2;

    fox = createSprite(100,600,10,10);
    fox.addImage("fox",foxImg);
    fox.scale=0.1

    lifeSpan = createSprite(1000,100,10,10);
    lifeSpan.addImage("lifeSpan",lifeImg);
    lifeSpan.scale=0.2

    lifeSpan2 = createSprite(1100,100,10,10);
    lifeSpan2.addImage("lifeSpan",lifeImg);
    lifeSpan2.scale=0.2

    lifeSpan3 = createSprite(1200,100,10,10);
    lifeSpan3.addImage("lifeSpan",lifeImg);
    lifeSpan3.scale=0.2;




   
}

function draw()
{
    background(startingbg);
    //image(startingbg,0,0,displayWidth+80,displayHeight);

    push();
    imageMode(CENTER);
0

    if (road.x < windowWidth/3+150){
        road.x=windowWidth/2;
    }

    pop();

    if(keyDown(LEFT_ARROW))
    {
        fox.x-=5;
    }

    if(keyDown(RIGHT_ARROW))
    {
        fox.x-=-5
    }

    if(keyDown(DOWN_ARROW))
    {
        fox.y-=-5
    }

    if(keyDown(UP_ARROW))
    {
        fox.y-=5
    }

    spawnRocks();

    /*if(fox.isTouching(rocks))
    {
        lifeSpan.visiblility=false;
    }

    if(fox.isTouching(rocks) && lifeSpan.visibility==false)
    {
        lifeSpan2.visibility=false;
    }

    if(fox.isTouching(rocks) && lifeSpan.visibility==false && lifeSpan2.visibility==false)
    {
        lifeSpan3.visibility=false;
    }

    if(lifeSpan3.visibility==false){
        gameState= "end";
        swal({
            title: "Game Over!",
            text: "You lost all of your lives :(",
            icon: "error",
            button: "Ok"
          })
    }*/
    
    drawSprites();
}


function spawnRocks(){
    if (frameCount % 50 === 0){
        var rand = Math.round(random(200,800));
        var rocks = createSprite(800,rand,10,10);
        rocks.addImage("rocks",rocksImg);

        //var rand= Math.round(random(1));
        rocks.velocityX = -2;
        rocks.scale=0.2;
        rocks.lifetime = 400;
    }
}

