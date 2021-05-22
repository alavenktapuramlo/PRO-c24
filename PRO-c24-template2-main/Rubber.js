class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
		this.body=Bodies.ellipse(x,y,r,{resistution:0.3,friction:5,density:1})
		World.add(engine.world, this.body);
        this.radius = r
	}
	display()
	{	
			push()
			translate(this.body.position.x, this.body.position.y);
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			ellipse(0,0,this.radius)
			pop()
	}

}