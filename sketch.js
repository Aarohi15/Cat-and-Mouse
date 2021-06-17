var cat , catImg1 , catImg2 , catImg3;
var mouse, mouseImg1 , mouseImg2 , mouseImg3;
var bg , bg1;

function preload() {
    //load the images here

bg1 = loadImage("images/garden.png");
catImg1 = loadAnimation("images/cat1.png");
catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
catImg3 = loadAnimation("images/cat4.png");

mouseImg1 = loadAnimation("images/mouse1.png");
mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
mouseImg3 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    bg = createSprite(500,400);
    bg.addImage(bg1);
   
    //create tom and jerry sprites here
    cat = createSprite(850,600);
    cat.addAnimation("cat",catImg1);
    cat.scale = 0.2;

    mouse = createSprite(300,600);
    mouse.addAnimation("mouse",mouseImg1);
    mouse.addAnimation("mouseteasing",mouseImg2);
    mouse.scale = 0.2;


}

function draw() {

    // background(bg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (mouse.width - cat.width)/2){
        cat.addAnimation("catHappy",catImg3)
        cat.changeAnimation("catHappy")

        mouse.addAnimation("mouseHappy",mouseImg3)
        mouse.changeAnimation("mouseHappy")

        cat.velocityX = 0;

        cat.x = 400;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      
      cat.velocityX = -2;
      cat.addAnimation("catTeasing",catImg2);
      cat.changeAnimation("catTeasing");

      mouse.addAnimation("mouseteasing",mouseImg2);
      mouse.frameDelay = 25;
      mouse.changeAnimation("mouseteasing");
  }


}
