class Rain {
    constructor(x, y) {
        var options = {
            restitution: 0.1,
            friction: 0.001
            
        }
        
        this.body = Bodies.circle(x, y, 10, options);
        this.r = 10;
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
        
    }

};