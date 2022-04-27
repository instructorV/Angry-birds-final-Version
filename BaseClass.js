class BaseClass{
    constructor(x,y,width,height,angle){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.angle = angle
        this.options = {
            restitution:0.8,
            friction:0.9,
            density:1
        }
        this.image = loadImage('sprites/base.png')
        this.body = Matter.Bodies.rectangle(this.x,this.y,this.width,this.height,this.options)
        Matter.World.add(world1,this.body)
    }

    display(){
        
        push()
        imageMode(CENTER)
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        image(this.image,0,0,this.width,this.height)
        pop()
    }
}