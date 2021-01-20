class Man {
    constructor(x,y) {
        var options = {
            isStatic:true
        }
        
        this.body = Bodies.rectangle(x,y,400,400, options);
        this.w = 400;
        this.h= 400;
        this.image= loadImage("images/Walking Frame/walking_1.png");
        World.add(world, this.body);
    }

    display() {

        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.h,this.w);
        
    }

};