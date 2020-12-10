class Ball{

    constructor(x,y,r){

        var options={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;

        this.body = Bodies.circle(x,y,23,options);
        
        World.add(world, this.body);

        this.image=loadImage("ball.png");
    }
    display(){

        push();
            var pos = this.body.position;
            translate(pos.x,pos.y);
            imageMode(CENTER);
            image(this.image,0,0,70,70);
            pop();

    }
    
    }   
