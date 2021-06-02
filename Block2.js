class Block2{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
            'friction':0.1
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility=255
        World.add(world, this.body);

      }
      display(){
        push();
        
        var pos =this.body.position;
        rectMode(CENTER);
        fill(rgb(240,128,128));
        rect(pos.x, pos.y, this.width, this.height);
        
        pop();
      }
  }