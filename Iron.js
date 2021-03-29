class Iron {
  constructor(x, y) {
    var options = {
      'density':0.8,
      'friction': 3,
      'restitution':30
    };
    this.body = Bodies.rectangle(x, y, 70, 70, options);
    this.width = 50;
    this.height = 80;
    World.add(world, this.body);
  };
  display(){
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(4);
    stroke("white")
    fill("red")
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  };
};