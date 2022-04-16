var scl = 25;

function setup(){
    createCanvas(600, 600);
    s = new snake();
    f = new food();
    f.pickLocation()
    frameRate(10);
}

function keyPressed(){
	if ((keyCode == UP_ARROW) & (s.yspeed <= 0)){
		s.dir(0,-1);
    }else if((keyCode == DOWN_ARROW) & (s.yspeed >= 0)){
        s.dir(0,1);
    }
    if ((keyCode == RIGHT_ARROW) & (s.xspeed >= 0)){
		s.dir(1,0);
    }else if((keyCode == LEFT_ARROW) & (s.xspeed <= 0)){
        s.dir(-1,0);
    }
	
}

function draw(){
    background(150);
    s.snake();
    f.food();
  
    if(s.eat(f.position)){
      f.pickLocation();
    }

}