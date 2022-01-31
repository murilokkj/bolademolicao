class Bola{
     
    constructor(x,y){

        var options = {
            
         AirFriction: 0.005,
         density: 1

        }
    
        this.body = Bodies.circle(x,y,60,options);
        this.r = 60;        
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        
        fill("black");
        stroke("#FA1188");
        strokeWeight(3);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r);

        pop();
    }




}