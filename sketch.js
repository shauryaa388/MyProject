var bkg;

function preload() {
bkg = loadImage("3318978665d6ddfbd5c9dfccfaeb70e2.png")

}


function setup() {
  createCanvas(800,1000);
  createSprite(112, 111, 100, 82);
}

function draw() {
  background(bkg);  
  drawSprites();
  text(mouseX + " " + mouseY, mouseX,mouseY)
}
