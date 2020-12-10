class Box
{
    constructor(x,y,width,height)
    {
        
        var option={
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,option);
    this.width = width;
     this.height = height;

        //this.body=Bodies.rectangle(x,y,width,height,option);
        
       
        World.add(world,this.body)

        this.image=loadImage("bin.png");
    }

display() {
    push();
        translate(this.body.position.x, this.body.position.y);
        rotate(0);
    imageMode(CENTER);
        image(this.image, 0, 0,150,200);
        pop();
}
}

