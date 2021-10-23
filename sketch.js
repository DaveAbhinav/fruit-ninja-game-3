var knife, knifeImg;
var fruits ,fruit2, fruitsImg1,fruitsImg2, fruitsImg3, fruitsImg4, fruitSplashImg, fruitGroup, FruitCutSound;
var bg;
var score = 0;
var rectangle;
var lives = 3;
var gameState = "play";

function preload(){
    knifeImg = loadImage("./assets/knifeImg.png");
    fruitsImg1 = loadImage("./assets/fruitImage1.png");
    fruitsImg2 = loadImage("./assets/fruitImage2.png");
    fruitsImg3 = loadImage("./assets/fruitImage3.png");
    fruitsImg4 = loadImage("./assets/fruitImage4.png");
    fruitSplashImg = loadImage("./assets/fruitSplash.png");
    FruitCutSound = loadSound("./assets/fruitCutSound.mp3");
    bg = loadImage("./assets/background.jpeg");
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    knife = createSprite(200,200,50,20);
    knife.addImage(knifeImg);
    knife.scale = 3;
    fruitGroup = new Group();
    //knife.debug = true;

    rectangle = createSprite(3000,10,6000,10);
    rectangle.visible = false;
    
}


function draw(){
    background(bg);
   if(gameState === "play"){
    knife.x = World.mouseX;
    knife.y = World.mouseY;
     fruits();
     if(fruitGroup.isTouching(knife)){
         fruitGroup.destroyEach();
         score = score+5;
         FruitCutSound.play();
     }

     fill("white");
     textSize(100);
     text("Score: "+score,4600,100);
     fill("white");
     textSize(100);
     text("Lives: "+lives,4600,200);
     
    if(fruitGroup.isTouching(rectangle)){
        fruitGroup.destroyEach();
         lives = lives-1;
     }
if(lives === 0){
    gameState = "End"
}
        
    }else if(gameState === "End"){
        textSize(150);
        text("Game Over", 2200,1200);
        fruitGroup.setVelocityYEach(0)
    }
     
     
    
    drawSprites();
}

function fruits(){
    if(frameCount % 100 === 0){
     fruit = createSprite(200,windowHeight,20,50);
     //fruit.debug = true;   
     fruit.scale = 2;
    fruit.x = Math.round(random(10,windowWidth -10))
    var rand = Math.round(random(1,4));
     switch(rand) {
          case 1: fruit.addImage(fruitsImg1);
           break;
            case 2: fruit.addImage(fruitsImg2);
             break;
              case 3: fruit.addImage(fruitsImg3);
               break;
                case 4: fruit.addImage(fruitsImg4);
                 break; 
                  default: break; }
    fruit.velocityY = -20;
    fruit.lifetime = 600;
    fruitGroup.add(fruit);

   /* fruit2 = createSprite(200,windowHeight,20,50);
    fruit2.scale = 2;
    fruit2.x = Math.round(random(10,windowWidth -10))
    var rand = Math.round(random(1,4));
     switch(rand) {
          case 1: fruit2.addImage(fruitsImg1);
           break;
            case 2: fruit2.addImage(fruitsImg2);
             break;
              case 3: fruit2.addImage(fruitsImg3);
               break;
                case 4: fruit2.addImage(fruitsImg4);
                 break; 
                  default: break; }
                  fruit2.velocityY = -20;
                  fruit2.lifetime = 600;
                  fruitGroup.add(fruit2);
    }*/
   
    
    }
}