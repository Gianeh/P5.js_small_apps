class Boid {
  
  constructor() {
    
      this.radius = 10
    
      this.position = createVector(random(width), random(height));
      this.velocity = p5.Vector.random2D();
      this.velocity.setMag(random(2, 4));
      this.acceleration = createVector();
      this.maxForce = 0.5;     //Max steering force applied
      this.maxSpeed = 4;
  }
  
  align(boids) {
      let perceptionRadius = 200;
      let steering = createVector();
      let total = 0;
      for (let i = 0; i< boids.length; i++) {
        let d = dist(
          this.position.x,
          this.position.y,
          boids[i].position.x,
          boids[i].position.y
        );
        if (boids[i] != this && d < perceptionRadius) {
          steering.add(boids[i].velocity);
          total++;
        }

      }
      if(total > 0){
        steering.div(total)
        steering.setMag(this.maxSpeed);
        steering.sub(this.velocity);
        steering.limit(this.maxForce);

         }
      return steering;
  }
    
  cohesion(boids) {
      let perceptionRadius = 100;
      let steering = createVector();
      let total = 0;
      for (let i = 0; i< boids.length; i++) {
        let d = dist(
          this.position.x,
          this.position.y,
          boids[i].position.x,
          boids[i].position.y
        );
        if (boids[i] != this && d < perceptionRadius) {
          steering.add(boids[i].position);
          total++;
        }

      }
      if(total > 0){
        steering.div(total);
        steering.sub(this.position);
        steering.setMag(this.maxSpeed);
        steering.sub(this.velocity);
        steering.limit(this.maxForce);

         }
      return steering;
  }
  
  
  
  separation(boids) {
      let perceptionRadius = 50;
      let steering = createVector();
      let total = 0;
      for (let i = 0; i< boids.length; i++) {
        let d = dist(
          this.position.x,
          this.position.y,
          boids[i].position.x,
          boids[i].position.y
        );
        if (boids[i] != this && d < perceptionRadius) {
          let diff = p5.Vector.sub(this.position, boids[i].position);
          diff.mult(1/d);
          steering.add(diff);
          total++;
        }

      }
      if(total > 0){
        steering.div(total);
        steering.setMag(this.maxSpeed);
        steering.sub(this.velocity);
        steering.limit(this.maxForce);

         }
      return steering;
  }
  
  
  flock(boids){
      let alignment = this.align(boids);
      let cohesion = this.cohesion(boids);
      let separation = this.separation(boids);
      alignment.mult(separationSlider.value());
      cohesion.mult(cohesionSlider.value());
      separation.mult(separationSlider.value());
    
      this.acceleration.add(separation)
      this.acceleration.add(cohesion);
      this.acceleration.add(alignment);
  }
  
  pacMan(){
      if(this.position.x < 0){
        this.position.x = width;

      }else if(this.position.x > width){
        this.position.x = 0;

      }

      if(this.position.y < 0){
        this.position.y = height;

      }else if(this.position.y > height){
        this.position.y = 0;

      }


  }  
  
  update() {
      this.position.add(this.velocity);
      this.velocity.add(this.acceleration);
      this.velocity.limit(this.maxSpeed);
      this.acceleration.mult(0);
  } 
    
  show() {
    strokeWeight(this.radius);
    stroke(255);
    point(this.position.x, this.position.y);
  }  
}