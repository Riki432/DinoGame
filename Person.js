class Person{
    constructor(){
        this.pos = createVector(50, 50);
        this.height = 50;
        this.verticalAcc = createVector(0, 0);
        this.verticalVelocity = createVector(0, 50)

    }
    
    update(){
        this.verticalVelocity.add(this.verticalAcc);
        this.pos.add(this.verticalVelocity);
    }
    render(){
        stroke(255,0,0);
        fill(255);
        // rectMode(CENTER);
        this.update();
        rect(this.pos.x, this.pos.y, 20, this.height);
    }


    duck(pressed){
            // this.height = pressed ? 20: 50;
            this.pos.y = pressed ? height - 20 : height-50;
    }

    jump(pressed){
        this.pos.y = pressed ? this.pos.y - 50: this.pos.y;  
        this.verticalAcc = pressed? createVector(0, 1): createVector()
    }


}