var p;
var R;
var smiley;
var starPos = [];
function preload(){
    smiley = loadImage("./smiley.png");
}
function setup(){
    createCanvas(1200,550);
    for(let i = 0; i< 100; i++){
        starPos.push(
            createVector(
                random(0, 1200),
                random(0, 550)
            )
        );
    }
    // createCanvas(1200,550);
    background(0);
    p = new Person();
    R = new Road();
}

function draw(){
    background(0);
    //Drawing Stars
    strokeWeight(4);
    stroke(255);
    // for(let star in starPos){
    //     point(star.x, star.y);
    // }
    starPos.forEach(elem => {
        point(elem.x, elem.y)
    });
    R.render();
    // p.duck(keyIsDown(DOWN_ARROW));
    // p.jump(keyIsDown(UP_ARROW));
    p.move();
    p.render(smiley);
    
}