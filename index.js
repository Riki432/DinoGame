var p;
var R;
var smiley;
function preload(){
    smiley = loadImage("./smiley.png");
}
function setup(){
    createCanvas(1200,550);
    background("green");
    p = new Person();
    R = new Road();
}
let i;


    function preload(){
        i=loadImage('./images.jpg');
        
        

    }

function draw(){
    background(0);
    
    R.render();
    R.DrawStars(i);
  
    
    // p.duck(keyIsDown(DOWN_ARROW));
    // p.jump(keyIsDown(UP_ARROW));
    p.move();
    p.render(smiley);
    
}