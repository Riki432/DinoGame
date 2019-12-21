var p;
var R;
function setup(){
    createCanvas(1200,550);
    background(0);
    p = new Person();
    R= new Road();
}

function draw(){
    
    p.render();
    R.render();
}