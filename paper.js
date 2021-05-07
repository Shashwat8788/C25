class Paper {
    constructor(){
        var options ={
            restitution:0.3,
            friction:0.8,
            density:1.2
        }
        this.body = Bodies.circle(130,20,25,options);
        //this.radius = 50; 
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        var paperPos=this.body.position;

			//push()
			//translate(paperPos.x, paperPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			//rect(0,0,this.w, this.h);
            image(this.image,paperPos.x,paperPos.y,50,50);
			//pop()

    } 

}