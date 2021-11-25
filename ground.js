class Ground{
    constructor(x, y, width, height){
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,{isStatic:true})
        World.add(world, this.body)
    }
    display(){
        rectMode(CENTER)
        fill("yellow")
        rect(this.body.position.x,this.body.position.y, this.width, this.height)
    }


}
