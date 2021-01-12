class Box{
    constructor(x,y,width,height) {
      var options = {
        restitution:0.8,
        friction:1.0,
        density:1.0
          
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("square.png");
      this.visibility = 255;
    }
    display(){
      
      
      var pos =this.body.position;
      var angle = this.angle;
      push();
      if (this.body.speed < 3) {
          imageMode(CENTER);
          // translate(pos.x, pos.y);
          // rotate(angle);
          fill("blue");
          stroke("black");
          strokeWeight(4);
          image(this.image, pos.x, pos.y, this.width, this.height);
          pop();
      } else {
          push();
          World.remove(world, this.body);
          this.visibility = this.visibility - 10;
          tint(255, this.visibility);
          image(this.image, pos.x, pos.y, this.width, this.height);
          pop();
      }
    }
  }
