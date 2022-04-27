class SlingShot{
    constructor(bodyX,pointB){
        var options = {
            bodyA:bodyX,
            pointB:pointB,
            length:10,
            stiffness:0.1
        }
        this.pointB = pointB
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")

        this.sling  = Matter.Constraint.create(options)
        Matter.World.add(world1,this.sling)
    }

    display(){

        image(this.sling1,250,152)
        image(this.sling2,222,152)

        push()
        strokeWeight(8)  
        stroke(48,22,8)   
        if(this.sling.bodyA != null){
            line(this.pointB.x-20,this.pointB.y+10,this.sling.bodyA.position.x,this.sling.bodyA.position.y)
            line(this.pointB.x+20,this.pointB.y+10,this.sling.bodyA.position.x,this.sling.bodyA.position.y)
        }
        
        pop()
    }

    fly(){
        this.sling.bodyA = null
    }

    attach(){
        this.sling.bodyA = bird.body
    }

}