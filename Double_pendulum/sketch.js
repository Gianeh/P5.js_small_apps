let g = 0.981 //too fast --> lower gravity
let r1 = 100;
let r2 = 100;
let m1 = 10;
let m2 = 10;
//Random initial conditions
let rnd1 = Math.random(0.001, 0.009);
let rnd2 = Math.random(0.001, 0.009);

let a1 = Math.PI+rnd1;
let a2 = (Math.PI/2)+rnd2;
let a_v1 = 0;
let a_v2 = 0;
let a_ac1 = 0;
let a_ac2 = 0;
let x_v1 = 0;
let x_ac1 = 0;
let y_v1 = 0;
let y_ac2 = 0;

let linex = [];
let liney = [];

function setup() {
  createCanvas(500, 500);
  //background(255);
}

function draw() {
  background(255);
  translate(250, 250);
  
  let x1 = r1 * sin(a1);
  let y1 = r1 * cos(a1);
  
  fill(0);
  line(0,0,  x1,y1);
  ellipse(x1,y1, m1);
  
  
  //point(x1,y1);
  stroke(0);
  
  let x2 = x1 + r2 * sin(a2);
  let y2 = y1 + r2 * cos(a2);
  linex.push(x2);
  liney.push(y2);
  
  fill(0);
  line(x1,y1,  x2,y2);
  ellipse(x2,y2, m2);
  

  beginShape();
  noFill();
  for(let i = 0; i < linex.length; i++){
    vertex(linex[i], liney[i]);
  }
  endShape();
  
  //Double Pendulum Differential Equations
  a_ac1 = (-g*(2*m1+m2)*sin(a1) - m2*g*sin(a1-2*a2) - 2*sin(a1-a2)*m2*(pow(a_v2,2)*r2+pow(a_v1,2)*r1*cos(a1-a2))) /
                (r1*(2*m1+m2-m2*cos(2*a1-2*a2)));
  a_ac2 = (2*sin(a1-a2)*(pow(a_v1,2)*r1*(m1+m2)+g*(m1+m2)*cos(a1)+pow(a_v2,2)*r2*m2*cos(a1-a2))) /
                (r2*(2*m1+m2-m2*cos(2*a1-2*a2)));
  
  //print(a_ac1);

  a_v1 += a_ac1;
  a_v2 += a_ac2;  
  
  //Damping
  a_v1 *= 0.998;
  a_v2 *= 0.998;
  
  a1 += a_v1;
  a2 += a_v2;

  if(linex.length > 200){
    linex.shift();
    liney.shift();
  }
  
  
}