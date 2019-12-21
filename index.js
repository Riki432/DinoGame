var p;
function setup(){
    createCanvas(800, 400);
    // background(0);
    p = new Person();
}

function draw(){
    background(0)
    p.render();
    p.duck(keyIsDown(DOWN_ARROW));
    p.jump(keyIsDown(UP_ARROW));
}