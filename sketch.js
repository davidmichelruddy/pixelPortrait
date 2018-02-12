var video;
var vScale = 16;
var particles = [];
var triangles = [];
var click = false;
var count = 0;
var c;

function setup() {
  c = createCanvas(windowWidth,windowHeight);
  pixelDensity(2);
  background(0);
  button = createButton('🎨 Paint My Portrait  ');
  button.position(windowWidth/2, windowHeight/2);
  button.mousePressed(clickToggle);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
  video.loadPixels();
  video.hide();
  for (var i = 0; i < 200; i++) {
    particles[i]  = new Particle(windowWidth/2,windowHeight/2);
  }
//
}

function draw() {
  video.loadPixels();
  if (click && count < 1) {
    triagleBackground();
  }

  if (click && count <= 200) {
    for (var i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].show();
    }
    count++;
  }

  if (count === 200) {
    save = createButton('⬇️ Save My Portrait');
    save.position(windowWidth/2, 3*windowHeight/4);
    save.mousePressed(savePic);
  }

  //filter(INVERT);
}

function triagleBackground() {
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
function clickToggle() {
  click = true;
  count = 0;
  button.remove();
}

function savePic() {
  saveCanvas(c, 'portraitOfYou_by_DMR', 'jpg');
}