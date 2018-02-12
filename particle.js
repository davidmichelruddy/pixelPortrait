var Particle = function(x,y) {
  this.x = x;
  this.y = y;
  this.r = random(1,20);
};

Particle.prototype.update = function() {
  this.x += random(-30,30);
  this.y += random(-30,30);

  this.x = constrain(this.x,0, width);
  this.y = constrain(this.y,0, height);
};

Particle.prototype.show = function() {
  if (frameCount > 20 && frameCount < 200) {
    stroke(0,random(10,30));
    var px = floor(this.x / vScale);
    var py = floor(this.y / vScale);
    var col = video.get(px,py);
    fill(col[0], col[1], col[2], 100);
    if (frameCount%2 === 0) {
      ellipse(this.x,this.y,this.r,this.r);
    } else if (frameCount%3 === 0) {
      triangle(this.x,this.y, (this.x + this.r), (this.y - this.r), (this.x - this.r), (this.y - this.r));
    } else if (frameCount%5 === 0) {
      //strokeWeight(100);
      line(this.x, this.y, this.x + random(50), this.y + random(50));
    } else {
 rectMode(CENTER);
      rect(this.x,this.y, this.r,this.r);
    }
  }

    //ellipse(this.x,this.y,this.r,this.r);
};