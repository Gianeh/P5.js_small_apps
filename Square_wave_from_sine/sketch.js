let time = 0;
let wave = [];
let slider;
let speed;

function setup(){
	createCanvas(600,400);
    slider = createSlider(1, 50, 1);
    speed = createSlider(1, 10, 1);
}

function draw(){
	background(255);
    translate(150, 200);  //Centra il disegno
    let x = 0;
    let y = 0;
    
    for (let i = 0; i < slider.value(); i++){
    let prevx = x;
    let prevy = y;
      
    let n = i * 2 + 1; //Cuore dell'esperimento
	
    let radius = 10*(4/n * PI);
		
    x += radius*cos(n * time);
    y += radius*sin(n * time);
  
    stroke(0, 100);
    ellipse(prevx,prevy,radius*2);
	
    noFill();
    
    ellipse(x,y, 5);
    stroke(0)
    line(prevx,prevy, x,y);
      
  }
  wave.push(y);
  
    stroke(0);
    let offset = 170;
    beginShape();
  
    for (let i = 0; i < wave.length; i++){
      vertex(i+offset, wave[wave.length-i]);
  }
    endShape();
    line(x,y, offset,wave[wave.length-1]);
  
    if (wave.length > 600){
      wave.shift();
  }
  
    time += speed.value()/100;
}