var movingrect , fixedrect;


function setup() {
  createCanvas(800,400);
 movingrect=createSprite(750, 200, 50, 20);
fixedrect = createSprite(50,200,50,50);
movingrect.shapeColor = "green";
fixedrect.shapeColor= "blue";
fixedrect.velocityX = 5;
movingrect.velocityX = -5;

o1 = createSprite(100,100,90,80);
o2 = createSprite(100,200,90,80);
}

function draw() {
  background(0,100,25);  
  o2.x=mouseX;
  o2.y = mouseY;

  if(isTouching(o2,o1)){
    o1.shapeColor = "red"
    o2.shapeColor = "red";
    }
  else{
    o1.shapeColor = "green";
    o2.shapeColor = "green";
  }
  bounceoff(movingrect, fixedrect);

    


  drawSprites();
}

