class food{
    constructor(){
      this.position = createVector(random(width), random(height));
      this.size = scl;
    }
    pickLocation(){
      var cols = floor(width/scl);
      var rows = floor(height/scl);
      this.position = createVector(floor(random(cols)), floor(random(rows)));
      this.position.mult(scl);
      
    }
    
    show(){
      fill(0,255,0);
      rect(this.position.x,this.position.y, this.size,this.size);
      
    }
    
    food(){
      this.show();
    }
  }