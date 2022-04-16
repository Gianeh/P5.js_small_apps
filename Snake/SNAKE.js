class snake{
    constructor(){
        this.size = scl;
        this.x = 0;
        this.y = 0;
		this.maxSpeed = 1;
        this.xspeed = 0;
        this.yspeed = this.maxSpeed;
        this.num = 0;
        this.squares = [];
		
		}
  
        checkDeath(){
          for(let i = 0; i < this.squares.length; i++){
            var pos = this.squares[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
            if(d < 1){
              this.num = 0;
              this.squares = [];
            }
          }
          
          
        }
		
        eat(position){
          var d = dist(this.x+(this.size/2), this.y+(this.size/2), position.x+(this.size/2), position.y+(this.size/2));
          if(d < this.size){
            this.num++;
            return true;
            
          }else{
            return false;
          }
          
        }
  
        dir(x,y){
            this.xspeed = x * this.maxSpeed;
            this.yspeed = y * this.maxSpeed;
        }

		pacMan(){
			if(this.x > width){
				this.x = 0;
			
			}else if(this.x < 0){
				this.x = width;
			}
			if(this.y > height){
				this.y = 0;
			}else if(this.y < 0){
				this.y = height;
				
			}
		}

        update(){
            if(this.num == this.squares.length){
              for(let i = 0; i < this.squares.length-1; i++){
                this.squares[i] = this.squares[i+1];
              }
              
            }
            this.squares[this.num-1] = createVector(this.x, this.y);
          
            this.x += this.xspeed * scl;
            this.y += this.yspeed * scl;
          
          
            //NOT PACMAN
            //this.x = constrain(this.x, 0, width-this.size);
            //this.y = constrain(this.y, 0, height-this.size);


        }

        show(){
          
          fill(255);
          for(let i = 0; i < this.squares.length; i++){
            rect(this.squares[i].x,this.squares[i].y, this.size,this.size);
            

          }
          rect(this.x,this.y, this.size,this.size);
        }

        snake(){
            this.update()
            this.show();
            this.checkDeath();
            
            //PACMAN MODE; ACTIVATE IN  update()
            this.pacMan();


        }

}