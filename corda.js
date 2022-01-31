class Corda{

    constructor(bodyA,pointB){
        
        var options = {
            bodyA = bodyA,
            pointB = pointB,
            stiffness: 1,
            length: 100
        }
        this.chain = Constraint.create(options);
        World.add(world,this.body);
        this.pointB = pointB;
           
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        
        push();
        stroke("#DF35F2");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();

    }
}