
class RECT{

    constructor(x,y,w,h){
        var Options={
        isStatic:true
        }
    this.body=Bodies.rectangle(x,y,w,h,Options) ;
    this.width=w;
    this.height=h;
    World.add(world,this.body);
    }
    display(){
     var pos=this.body.position;
     rectMode(CENTER);
     fill(255) ;
      rect(pos.x,pos.y,this.width,this.height);
      
    }
}