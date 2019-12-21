var p;
var R;
var starPos = [];
function setup(){
    createCanvas(1200,550);
    background("green");
    p = new Person();
    R= new Road();
}
let i;


    function preload(){
        i=loadImage('./images.jpg');
        
        

    }

function draw(){
    
    p.render();
    R.render();
    R.DrawStars(i);
}