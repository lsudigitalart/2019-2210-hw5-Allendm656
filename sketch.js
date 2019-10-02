//Circles and arcs from the midpoints of four sides. (ACG 59)
//https://massmoca.org/event/walldrawing138/
//Primarily used Translate, didn't see many efficient means/reasons to use rotate or scale

//Background circle variables
  var cs = 20
  var circlestate1 = true
  var circlestate2 = false

function setup() {
createCanvas(500,500)
background(250, 150, 0)
}

function draw() {
//Secondary Background to avoid stroke overlap weirdness
  push()
    if(circlestate2){
      cs -= .5
      if(cs == -40){
        circlestate1 = true
        circlestate2 = false
      }
    }
    if(circlestate1){
      cs += .5
      if(cs == 700){
        circlestate1 = false
        circlestate2 = true
     }
    }
  noStroke()
  fill(250, 150, 0)
  ellipse(250, 250, cs, cs)
  pop()

//Clockwise Rotating ellipses details
  push()
  noStroke()
  fill(250, 150, 0)
  //Rotations, rotate() free guarrentee or your cash back!
    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 225, 5));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 250, 15));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 275, 25));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 300, 35));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 325, 45));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 350, 55));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 375, 65));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 400, 75));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 425, 85));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 450, 95));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 475, 105));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 500, 115));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 525, 125));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 550, 135));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 575, 145));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 600, 155));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 625, 165));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 650, 175));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 675, 185));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 700, 195));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 725, 205));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 750, 215));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 775, 225));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 800, 235));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 825, 245));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 850, 255));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 875, 265));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 900, 275));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 925, 285));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 950, 295));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 975, 305));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 1000, 315));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 1025, 325));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 1050, 335));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / 1075, 345));
    ellipse(0, 0, 10, 10);
    pop()
    pop()

//Counter Clockwise Rotating ellipses details
  push()
  noStroke()
  fill(130, 0, 250)
  //Rotations, rotate() free guarrentee or your cash back!
    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -225, 5));
    ellipse(0, 0, 10, 10);
    pop()
    
    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -250, 15));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -275, 25));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -300, 35));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -325, 45));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -350, 55));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -375, 65));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -400, 75));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -425, 85));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -450, 95));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -475, 105));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -500, 115));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -525, 125));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -550, 135));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -575, 145));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -600, 155));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -625, 165));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -650, 175));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -675, 185));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -700, 195));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -725, 205));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -750, 215));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -775, 225));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -800, 235));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -825, 245));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -850, 255));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -875, 265));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -900, 275));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -925, 285));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -950, 295));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -975, 305));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -1000, 315));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -1025, 325));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -1050, 335));
    ellipse(0, 0, 10, 10);
    pop()

    push()
    translate(250, 250);
    translate(p5.Vector.fromAngle(millis() / -1075, 345));
    ellipse(0, 0, 10, 10);
    pop()
    pop()

//Middle
  push()
  translate(250, 250)
  stroke(0)
  strokeWeight(1)
  noFill()
  ellipse(0, 0, 20, 20)
  ellipse(0, 0, 40, 40)
  ellipse(0, 0, 60, 60)
  ellipse(0, 0, 80, 80)
  ellipse(0, 0, 100, 100)
  ellipse(0, 0, 120, 120)
  ellipse(0, 0, 140, 140)
  ellipse(0, 0, 160, 160)
  ellipse(0, 0, 180, 180)
  ellipse(0, 0, 200, 200)
  ellipse(0, 0, 220, 220)
  ellipse(0, 0, 240, 240)
  ellipse(0, 0, 260, 260)
  ellipse(0, 0, 280, 280)
  ellipse(0, 0, 300, 300)
  ellipse(0, 0, 320, 320)
  ellipse(0, 0, 340, 340)
  ellipse(0, 0, 360, 360)
  ellipse(0, 0, 380, 380)
  ellipse(0, 0, 400, 400)
  ellipse(0, 0, 420, 420)
  ellipse(0, 0, 440, 440)
  ellipse(0, 0, 460, 460)
  ellipse(0, 0, 480, 480)
  ellipse(0, 0, 500, 500)
  ellipse(0, 0, 520, 520)
  ellipse(0, 0, 540, 540)
  ellipse(0, 0, 560, 560)
  ellipse(0, 0, 580, 580)
  ellipse(0, 0, 600, 600)
  ellipse(0, 0, 620, 620)
  ellipse(0, 0, 640, 640)
  ellipse(0, 0, 660, 660)
  ellipse(0, 0, 680, 680)
  ellipse(0, 0, 700, 700)
  ellipse(0, 0, 720, 720)
  ellipse(0, 0, 740, 740)
  ellipse(0, 0, 760, 760)
  ellipse(0, 0, 780, 780)
  ellipse(0, 0, 800, 800)
  ellipse(0, 0, 820, 820)
  ellipse(0, 0, 840, 840)
  ellipse(0, 0, 860, 860)
  ellipse(0, 0, 880, 880)
  ellipse(0, 0, 900, 900)
  ellipse(0, 0, 920, 920)
  ellipse(0, 0, 940, 940)
  ellipse(0, 0, 960, 960)
  ellipse(0, 0, 980, 980)
  ellipse(0, 0, 1000, 1000)
  ellipse(0, 0, 1020, 1020)
  ellipse(0, 0, 1040, 1040)
  ellipse(0, 0, 1060, 1060)
  ellipse(0, 0, 1080, 1080)
  ellipse(0, 0, 1100, 1100)
  pop()

//Top
  push()
  translate(250, 0)
  stroke(0)
  strokeWeight(1)
  noFill()
  ellipse(0, 0, 20, 20)
  ellipse(0, 0, 40, 40)
  ellipse(0, 0, 60, 60)
  ellipse(0, 0, 80, 80)
  ellipse(0, 0, 100, 100)
  ellipse(0, 0, 120, 120)
  ellipse(0, 0, 140, 140)
  ellipse(0, 0, 160, 160)
  ellipse(0, 0, 180, 180)
  ellipse(0, 0, 200, 200)
  ellipse(0, 0, 220, 220)
  ellipse(0, 0, 240, 240)
  ellipse(0, 0, 260, 260)
  ellipse(0, 0, 280, 280)
  ellipse(0, 0, 300, 300)
  ellipse(0, 0, 320, 320)
  ellipse(0, 0, 340, 340)
  ellipse(0, 0, 360, 360)
  ellipse(0, 0, 380, 380)
  ellipse(0, 0, 400, 400)
  ellipse(0, 0, 420, 420)
  ellipse(0, 0, 440, 440)
  ellipse(0, 0, 460, 460)
  ellipse(0, 0, 480, 480)
  ellipse(0, 0, 500, 500)
  ellipse(0, 0, 520, 520)
  ellipse(0, 0, 540, 540)
  ellipse(0, 0, 560, 560)
  ellipse(0, 0, 580, 580)
  ellipse(0, 0, 600, 600)
  ellipse(0, 0, 620, 620)
  ellipse(0, 0, 640, 640)
  ellipse(0, 0, 660, 660)
  ellipse(0, 0, 680, 680)
  ellipse(0, 0, 700, 700)
  ellipse(0, 0, 720, 720)
  ellipse(0, 0, 740, 740)
  ellipse(0, 0, 760, 760)
  ellipse(0, 0, 780, 780)
  ellipse(0, 0, 800, 800)
  ellipse(0, 0, 820, 820)
  ellipse(0, 0, 840, 840)
  ellipse(0, 0, 860, 860)
  ellipse(0, 0, 880, 880)
  ellipse(0, 0, 900, 900)
  ellipse(0, 0, 920, 920)
  ellipse(0, 0, 940, 940)
  ellipse(0, 0, 960, 960)
  ellipse(0, 0, 980, 980)
  ellipse(0, 0, 1000, 1000)
  ellipse(0, 0, 1020, 1020)
  ellipse(0, 0, 1040, 1040)
  ellipse(0, 0, 1060, 1060)
  ellipse(0, 0, 1080, 1080)
  ellipse(0, 0, 1100, 1100)
  pop()

//Left
  push()
  translate(0, 250)
  stroke(0)
  strokeWeight(1)
  noFill()
  ellipse(0, 0, 20, 20)
  ellipse(0, 0, 40, 40)
  ellipse(0, 0, 60, 60)
  ellipse(0, 0, 80, 80)
  ellipse(0, 0, 100, 100)
  ellipse(0, 0, 120, 120)
  ellipse(0, 0, 140, 140)
  ellipse(0, 0, 160, 160)
  ellipse(0, 0, 180, 180)
  ellipse(0, 0, 200, 200)
  ellipse(0, 0, 220, 220)
  ellipse(0, 0, 240, 240)
  ellipse(0, 0, 260, 260)
  ellipse(0, 0, 280, 280)
  ellipse(0, 0, 300, 300)
  ellipse(0, 0, 320, 320)
  ellipse(0, 0, 340, 340)
  ellipse(0, 0, 360, 360)
  ellipse(0, 0, 380, 380)
  ellipse(0, 0, 400, 400)
  ellipse(0, 0, 420, 420)
  ellipse(0, 0, 440, 440)
  ellipse(0, 0, 460, 460)
  ellipse(0, 0, 480, 480)
  ellipse(0, 0, 500, 500)
  ellipse(0, 0, 520, 520)
  ellipse(0, 0, 540, 540)
  ellipse(0, 0, 560, 560)
  ellipse(0, 0, 580, 580)
  ellipse(0, 0, 600, 600)
  ellipse(0, 0, 620, 620)
  ellipse(0, 0, 640, 640)
  ellipse(0, 0, 660, 660)
  ellipse(0, 0, 680, 680)
  ellipse(0, 0, 700, 700)
  ellipse(0, 0, 720, 720)
  ellipse(0, 0, 740, 740)
  ellipse(0, 0, 760, 760)
  ellipse(0, 0, 780, 780)
  ellipse(0, 0, 800, 800)
  ellipse(0, 0, 820, 820)
  ellipse(0, 0, 840, 840)
  ellipse(0, 0, 860, 860)
  ellipse(0, 0, 880, 880)
  ellipse(0, 0, 900, 900)
  ellipse(0, 0, 920, 920)
  ellipse(0, 0, 940, 940)
  ellipse(0, 0, 960, 960)
  ellipse(0, 0, 980, 980)
  ellipse(0, 0, 1000, 1000)
  ellipse(0, 0, 1020, 1020)
  ellipse(0, 0, 1040, 1040)
  ellipse(0, 0, 1060, 1060)
  ellipse(0, 0, 1080, 1080)
  ellipse(0, 0, 1100, 1100)
  pop()

//Right
  push()
  translate(500, 250)
  stroke(0)
  strokeWeight(1)
  noFill()
  ellipse(0, 0, 20, 20)
  ellipse(0, 0, 40, 40)
  ellipse(0, 0, 60, 60)
  ellipse(0, 0, 80, 80)
  ellipse(0, 0, 100, 100)
  ellipse(0, 0, 120, 120)
  ellipse(0, 0, 140, 140)
  ellipse(0, 0, 160, 160)
  ellipse(0, 0, 180, 180)
  ellipse(0, 0, 200, 200)
  ellipse(0, 0, 220, 220)
  ellipse(0, 0, 240, 240)
  ellipse(0, 0, 260, 260)
  ellipse(0, 0, 280, 280)
  ellipse(0, 0, 300, 300)
  ellipse(0, 0, 320, 320)
  ellipse(0, 0, 340, 340)
  ellipse(0, 0, 360, 360)
  ellipse(0, 0, 380, 380)
  ellipse(0, 0, 400, 400)
  ellipse(0, 0, 420, 420)
  ellipse(0, 0, 440, 440)
  ellipse(0, 0, 460, 460)
  ellipse(0, 0, 480, 480)
  ellipse(0, 0, 500, 500)
  ellipse(0, 0, 520, 520)
  ellipse(0, 0, 540, 540)
  ellipse(0, 0, 560, 560)
  ellipse(0, 0, 580, 580)
  ellipse(0, 0, 600, 600)
  ellipse(0, 0, 620, 620)
  ellipse(0, 0, 640, 640)
  ellipse(0, 0, 660, 660)
  ellipse(0, 0, 680, 680)
  ellipse(0, 0, 700, 700)
  ellipse(0, 0, 720, 720)
  ellipse(0, 0, 740, 740)
  ellipse(0, 0, 760, 760)
  ellipse(0, 0, 780, 780)
  ellipse(0, 0, 800, 800)
  ellipse(0, 0, 820, 820)
  ellipse(0, 0, 840, 840)
  ellipse(0, 0, 860, 860)
  ellipse(0, 0, 880, 880)
  ellipse(0, 0, 900, 900)
  ellipse(0, 0, 920, 920)
  ellipse(0, 0, 940, 940)
  ellipse(0, 0, 960, 960)
  ellipse(0, 0, 980, 980)
  ellipse(0, 0, 1000, 1000)
  ellipse(0, 0, 1020, 1020)
  ellipse(0, 0, 1040, 1040)
  ellipse(0, 0, 1060, 1060)
  ellipse(0, 0, 1080, 1080)
  ellipse(0, 0, 1100, 1100)
  pop()

//Bottom
  push()
  translate(250, 500)
  stroke(0)
  strokeWeight(1)
  noFill()
  ellipse(0, 0, 20, 20)
  ellipse(0, 0, 40, 40)
  ellipse(0, 0, 60, 60)
  ellipse(0, 0, 80, 80)
  ellipse(0, 0, 100, 100)
  ellipse(0, 0, 120, 120)
  ellipse(0, 0, 140, 140)
  ellipse(0, 0, 160, 160)
  ellipse(0, 0, 180, 180)
  ellipse(0, 0, 200, 200)
  ellipse(0, 0, 220, 220)
  ellipse(0, 0, 240, 240)
  ellipse(0, 0, 260, 260)
  ellipse(0, 0, 280, 280)
  ellipse(0, 0, 300, 300)
  ellipse(0, 0, 320, 320)
  ellipse(0, 0, 340, 340)
  ellipse(0, 0, 360, 360)
  ellipse(0, 0, 380, 380)
  ellipse(0, 0, 400, 400)
  ellipse(0, 0, 420, 420)
  ellipse(0, 0, 440, 440)
  ellipse(0, 0, 460, 460)
  ellipse(0, 0, 480, 480)
  ellipse(0, 0, 500, 500)
  ellipse(0, 0, 520, 520)
  ellipse(0, 0, 540, 540)
  ellipse(0, 0, 560, 560)
  ellipse(0, 0, 580, 580)
  ellipse(0, 0, 600, 600)
  ellipse(0, 0, 620, 620)
  ellipse(0, 0, 640, 640)
  ellipse(0, 0, 660, 660)
  ellipse(0, 0, 680, 680)
  ellipse(0, 0, 700, 700)
  ellipse(0, 0, 720, 720)
  ellipse(0, 0, 740, 740)
  ellipse(0, 0, 760, 760)
  ellipse(0, 0, 780, 780)
  ellipse(0, 0, 800, 800)
  ellipse(0, 0, 820, 820)
  ellipse(0, 0, 840, 840)
  ellipse(0, 0, 860, 860)
  ellipse(0, 0, 880, 880)
  ellipse(0, 0, 900, 900)
  ellipse(0, 0, 920, 920)
  ellipse(0, 0, 940, 940)
  ellipse(0, 0, 960, 960)
  ellipse(0, 0, 980, 980)
  ellipse(0, 0, 1000, 1000)
  ellipse(0, 0, 1020, 1020)
  ellipse(0, 0, 1040, 1040)
  ellipse(0, 0, 1060, 1060)
  ellipse(0, 0, 1080, 1080)
  ellipse(0, 0, 1100, 1100)
  pop()

}
