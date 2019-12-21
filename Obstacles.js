class Obstacles{
    constructor()
    {
        this.xchangedown=width-300;
        this.ychangedown=0;
        this.xchangeup=width-100;
        this.ychangeup=600;
    }
    renderobstacle()
    {
        stroke(255,0,0);
        fill(255);
        var x1=100;
        var y1=300;
        var x2=100;
        var y2=-300;
        while(!this.xchangedown<=0 && this.xchangeup==this.xchangedown+200)
        {
            this.xchangedown+=100;
            this.xchangeup+=100;
            rect(this.xchangedown, this.ychangedown,x1,y1);
            rect(this.xchangeup,this.ychangeup,x2,y2);
        }

    }
}