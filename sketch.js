var video;
var vScale = 16;
var particles = [];
var triangles = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  pixelDensity(2);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
  video.loadPixels();
  //video.hide();
  for (var i = 0; i < 200; i++) {
    particles[i]  = new Particle(windowWidth/2,windowHeight/2);
  }

//

c1 = color(204, 102, 0);
c2 = color(0, 102, 153);

for (var j = 0; j < 20; j++) {
  var tri = {
    x1: (width/2) + random(200) -100,
    y1: height/2 + random(200) -100,
    x2: random(width * 2),
    y2: random(height * 2),
    x3: random(-width * 2),
    y3: random(-height * 2),
  };

  triangles.push(tri);
}

triangles.forEach(function(shape){
  fill(random(255));
  //strokeWeight(random(50)/100); // range
  noStroke();
  triangle(shape.x1,shape.y1,shape.x2,shape.y2,shape.x3,shape.y3);
});
}

function draw() {
  video.loadPixels();
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
  //filter(INVERT);
}