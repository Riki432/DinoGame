var p;
function setup(){
    createCanvas(200, 200);
    background(0);
    p = new Person();
}

function draw(){
    
    p.render();
}