class Ball {
    constructor(x,y,radii) {
      var options = {
         density:1,
         restitution:0.4,
      }
      this.body = Bodies.circle(x,y,radii,options);
      this.radii=radii
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      fill("brown");
      circle(pos.x, pos.y, this.radii*2);
    }
  };