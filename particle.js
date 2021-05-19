class Particle {
    constructor(x, y,r) {
        var options = {
            isStatic: false
        }
        
        this.r=r
        this.body = Bodies.circle(x, y,this.r, options);
        this.color=color(random(0,255), random(0,255), random(0,255));
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill(this.color)
        circle(pos.x, pos.y, this.r);
        

    }
};