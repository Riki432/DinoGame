class Obstacles{
    constructor(x, y, minSpeed)
    {
        this.minSpeed = minSpeed || 2;
        this.x=x;
        this.y=y;
        this.width=random(30, 80);
        this.speed = random(this.minSpeed, this.minSpeed + 5);
    }
    render()
    {
        fill(255,200,0);
        ellipse(this.x, this.y,this.width);

    }

    move(){
        this.x-= this.speed;
    }

    out(){
        return this.x < 0;
    }
}
