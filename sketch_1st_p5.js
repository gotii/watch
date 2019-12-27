//var hrColor = (168, 34, 230);
//var mnColor = (38, 235, 51);
//var secColor = (247, 47, 234);

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}


function draw() {
  background(0);
  let hr = hour();
  let mn = minute();
  let sec = second();
  translate(width / 2, height / 2);
  fill(255, 255, 0);
  noFill();
  stroke(168, 34, 230);
  textSize(34);
  strokeWeight(3.3);
  text("Gou", -90, -250);
  stroke(38, 235, 51);
  text("rav", -25, -250);
  stroke(247, 47, 234);
  text("soni", 40, -250);
  
  text(hr - 12 + ":" + mn + ":" + sec , -60, 200);
  //ellipse(0, 0, 300, 300);
  
  
  strokeWeight(12);
  
  rotate(-90);
  
 //hour
 stroke(168, 34, 230);
  let hrAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 250, 250, 0, hrAngle);
  //line(0, 0, endHr, endHr);
  
  //minut
  stroke(38, 235, 51);
  let mnAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 285, 285, 0, mnAngle);
  //line(0, 0, endMn, endMn);
  
  //second
  stroke(237, 81, 216);
  let secAngle = map(sec, 0, 60, 0, 360);
  arc(0, 0, 320, 320, 0, secAngle);
  //line(0, 0, endSec, endsec);
  
  
  
  rotate(-90);
  push();
  rotate(hrAngle);
  stroke(168, 34, 230);
  line(0, 0, 0, 50);
  pop();
  
  push();
  rotate(mnAngle);
  stroke(38, 235, 51);
  line(0, 0, 0, 75);             
  pop();
  
  push();
  rotate(secAngle);
  stroke(237, 81, 216);
  line(0, 0, 0, 100);
  pop();
  
  stroke(255);
  point(0, 0);
}
