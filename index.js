var p;
var R;
var smiley;
function preload(){
    smiley = loadImage("./smiley.png");
}
function setup(){
    createCanvas(1200,550);
    background(0);
    p = new Person();
    R = new Road();
}

function draw(){
    background(0);
    
    R.render();
  
    
    // p.duck(keyIsDown(DOWN_ARROW));
    // p.jump(keyIsDown(UP_ARROW));
    p.move();
    p.render(smiley);
    
}