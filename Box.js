class Box {
  constructor(x,y,width,height) {
    var options = {
      //isStatic:true,
        restitution:0.6,
        density:1,
        friction:1
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);


    this.visibility=255
  }
  display(){

    if(this.body.speed < 7){
    var pos =this.body.position;

    var angle = this.body.angle;
    push()
    
    translate(pos.x, pos.y);
    rotate(angle)
    rectMode(CENTER);
    rect(0,0, this.width, this.height);


    pop ()
  }
    else{
      World.remove(world, this.body);
      push ();
      
     this.visibilty = this.visibility - 5;
      
      
      pop ();
    }
  }
};


