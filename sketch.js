var rabbits;

function setup() {
 createCanvas(windowWidth, windowHeight);
 rabbits = createVideo("data/rabbits.webm");
 rabbits.hide(); 
}

function draw(){
  background(200);
  image(rabbits,10,10, 650, height - 30);
  filter('INVERT');
  image(rabbits,width/2 + 20, 10, 650, height - 30); 
}

function mousePressed() {
    rabbits.loop(); // set the video to loop and start playing
}
