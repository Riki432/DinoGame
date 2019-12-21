var p;
var R;
var smiley;
var starPos = [];
var obstacles = [];
var counter = 0;
var level = 1;
var globalSpeedLimit = 2;
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
    for(let i = 0; i < 10; i++){
        obstacles.push(new Obstacles(
            width + random(10, 40),
            random(30, height)
        ));
    }
    // createCanvas(1200,550);
    background(0);
    background("green");
    obs = new Obstacles();
    obs1 = new Obstacles();
    p = new Person();
    R = new Road();
}
let i;


    function preload(){
        i=loadImage('./images.jpg');
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
    fill(255, 200, 0);
    for(let i = obstacles.length-1; i >= 0; i--){
        obstacles[i].render();
        obstacles[i].move();
        if(obstacles[i].out()){
            obstacles.splice(i, 1);
            obstacles.push(new Obstacles(
                width + random(10, 40),
                random(30, height),
                globalSpeedLimit
            )); 
            counter++;
            if(counter > 10){
                console.log("Next Level!");
                counter = 0;
                p.incrementLevel();
                level++;
                if(level % 10 == 0){
                    globalSpeedLimit + 1;
                }
            }           
        }
        

    }
    // R.render();
    p.move();
    fill(255);
    p.render(smiley);
    obstacles.forEach(elem=>{
        if(p.hasCollided(elem)){
            noLoop();
        }
            // console.log("Harr gaya tu!");
            // noLoop();
    });
    

    // R.DrawStars(i);
  
    
    // p.duck(keyIsDown(DOWN_ARROW));
    // p.jump(keyIsDown(UP_ARROW));
    
    // if(p.hasCollided(obs)) console.log("Collision");    // console.log(p.hasCollided(obs));
    
    
}