class Person{

    constructor(){
        this.radius = 30;
        this.xinc = 5;
        this.pos = createVector(30, height - 60);
        // this.bpos = createVector(70, height - 20);
        // this.verticalJump = createVector();
        this.STATES = {
            "JUMPING" : 1,
            "NORMAL" : 2,
            "DUCKING" : 3,
        }
        this.state = this.STATES.NORMAL;

        

    }
    incrementLevel(){
        this.xinc-=0.5
    }
    render(){
        if(this.state == this.STATES.NORMAL)
            ellipse(this.pos.x, this.pos.y, this.radius);
    }


    duck(pressed){
        if(pressed){    // this.height = pressed ? 20: 50;
            this.state = this.STATES.DUCKING;
            ellipse(this.pos.x, this.pos.y, this.radius, this.radius/2);
            
        }
        else{
            this.state = this.STATES.NORMAL;
        }
    }

    move(){
        if(this.pos.x < this.radius){
            this.pos.x = this.radius;
            return;
        }
        if(this.pos.x > width - this.radius){
            this.pos.x = width - this.radius;
            return;  
        } 
        if(this.pos.y < this.radius){
            this.pos.y = this.radius;
            return;
        } 
        if(this.pos.y > height - this.radius){
            this.pos.y = height - this.radius;
            return;
        } 
        if(keyIsDown(LEFT_ARROW)){
            this.pos.x -= this.xinc;
        }
        if(keyIsDown(RIGHT_ARROW)){
            this.pos.x += this.xinc;
        }
        if(keyIsDown(UP_ARROW)){
            this.pos.y -= this.xinc;
        }
        if(keyIsDown(DOWN_ARROW)){
            this.pos.y += this.xinc;
        }

    }

    jump(pressed){
        if(pressed){
            
            // this.pos.y = height - 110;
            ellipse(this.pos.x, height - 110, this.radius);
            this.state = this.STATES.JUMPING;
        }else{
            this.state = this.STATES.NORMAL;
        }
    }

    hasCollided(block){
        
    }

}