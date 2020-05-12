class Box1 
{
    constructor(x, y, r) 
{

    // add options such as friction and restitution. Experiment with the values
    var options = {
     friction:0.1,
     restitution: 0.1
    };
 
    // create your box using the function arguments
    this.body = Bodies.polygon(x,y,3,r,options);;
      World.add(world, this.body);
    
}
display(x1,y1,x2,y2,x3,y3){
    var pos =this.body.position;
    fill("yellow");
    triangle(x1,y1,x2,y2,x3,y3);
  }
}
