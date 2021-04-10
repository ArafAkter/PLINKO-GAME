class Ground {
  constructor(x, y)  {
    var options = {
        isStatic: true
    }
    this.body = Bodies.circle(x, y, 15, options);
    this.width = 20;
    this.height = 20;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("#0ef4f879");
    stroke(0)
    ellipse(pos.x, pos.y, this.width, this.height);
  }
};
