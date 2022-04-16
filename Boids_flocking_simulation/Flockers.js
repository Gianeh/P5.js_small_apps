
const flock = [];

let alignSlider, cohesionSlider, separationSlider;
function setup() {
  createCanvas(800, 800);
  
  alignSlider = createSlider(0, 5, 1, 0.1);
  cohesionSlider = createSlider(0, 5, 1, 0.1);
  separationSlider = createSlider(0, 5, 1, 0.1);
  
  alignSlider.position(0, height + 1);
  cohesionSlider.position(150 , height + 1);
  separationSlider.position(300, height + 1);
  text("Alignment", alignSlider.x, height + 1 + 50 );
  text("Cohesion", cohesionSlider.x, height + 1 + 50 );
  text("Separation", separationSlider.x, height - 50 );
  
  for (let i = 0; i < 130; i++) {
    flock.push(new Boid());
  }

}

function draw() {
  background(51);
  for (let i = 0; i < flock.length; i++) {
    
    flock[i].pacMan();
    flock[i].flock(flock);
    flock[i].update();
    flock[i].show();
    
  }
}