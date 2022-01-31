class Bloco{
     
    constructor(x,y){

        var options = {
            
            restitution: 0.9,
            AirFriction: 0.05,
            density: 0.05

        }
    
        this.body = Bodies.rectangle(x,y,40,40,options);
        this.h = 40;
        this.w = 40;        
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        
        fill("black");
        stroke("purple");
        strokeWeight(3);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);

        pop();
    }




}