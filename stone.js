class Stone
{
    constructor(x, y, w, h) 
{

    // add options such as friction and restitution. Experiment with the values
    var options = {
     friction:0.1,
     restitution: 0.1
    };
 
    // create your box using the function arguments
    this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w; 
      this.h = h;
      World.add(world, this.body);
    
}
display(){
    var pos =this.body.position;
    fill("grey");
    rectMode(CENTER);
  rect(pos.x, pos.y, this.w,this.h);
  }
}
