Class Stone {
  constructor(x, y) {
    var options = {
      'density':0.8,
      'friction': 0.9,
      'restitution':12
    };
    this.body = Bodies.rectangle(x, y, 30, 50, options);
    this.width = 150;
    this.height = 40;
    World.add(world, this.body);
  };
  display(){
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
   

    push();
    translate(pos.x, pos.y);
   
    strokeWeight(2.5);
    stroke("red")
    fill("black")
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  };
};
