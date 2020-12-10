class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.visible = 255  ;
    }

    display(){
      if(this.body.speed < 3){
        super.display();
      }
        else{
          World.remove(world,this.body);
          push();
          this.visible -= 6 ; 
          tint(255,this.visible);
          pop();
        }
      }
  };
  