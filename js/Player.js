class Player{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0,
            'isStatic':true
            
        }
        this.body = Bodies.rectangle(x, y, 150, 200, options);
        this.width = 150;
        this.height = 200;
        this.x=x;
        this.y=y;
        this.image = loadImage("assets/pfront.png");
        this.l=loadImage("assets/pleft.png");
        this.r=loadImage("assets/pright.png");
        this.b=loadImage("assets/pback.png");
        World.add(world, this.body);
        
      }
      display(){
        var pos =this.body.position;
        //pos.x=mouseX;
        //pos.y=mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        /*rectMode(CENTER);
        fill("red");
        rect(0, 0, this.width, this.height);*/
        imageMode(CENTER)
        image(this.image, 0, 0, this.width, this.height)
        pop();
      }
      move(){
        var pos =this.body.position;
        if(keyDown("a")){
          pos.x=pos.x-5;
          image(this.l,pos.x,pos.y,this.width, this.height);
        }
        if (keyDown("d")){
          pos.x=pos.x+5;
          image(this.r,pos.x,pos.y,this.width, this.height);
        }
        if (keyDown("w")){
          pos.y=pos.y-5;
          image(this.b,pos.x,pos.y,this.width, this.height);
        }
        if (keyDown("s")){
          pos.y=pos.y+5;
          image(this.image,pos.x,pos.y,this.width, this.height);
        }
        
      }
}        
        