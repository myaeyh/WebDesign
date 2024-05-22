let bg

let colors = ["#7FF3AC","#C0F7A6","#FFF09D","#F6D5DC","#93F1F1"]

function preload(){
	bg = loadImage("bg.jpg")
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	// background(0); 	
	image(bg,0,0,width,height)
  
	// noStroke()
	// let span = 20
	// for(let y=0;y<height;y+=span){
	// 	fill(38+y/10, 60+y/10, 137)
	// 	rect(0+random(-5,5),y+random(-5,5),width,span*5)
	// }
	grassGraphics = createGraphics(width,height)
    
  for(let i=0;i<100;i++){
		grassGraphics.push()
		grassGraphics.fill("green")
		grassGraphics.circle(random(width),random(height),100)
		grassGraphics.pop()
	}
}

function draw() {
  //讓他不會一職出現
        // background(0,20)
	if (frameCount%5==0){
      //最後特效
		drawingContext.shadowColor = color(255)
		drawingContext.shadowBlur = 25
      
      //跟著滑鼠的全部
		push()
		
	  //放射狀
		push()
		translate(mouseX,mouseY)
      stroke("black")
      strokeWeight(50)
      for(let i=0;i<20;i+=1){
        let startR=random(50,80)
        let endR=startR+random(5,80)
        let angle=random(2*PI)
        
        line(startR*cos(angle),startR*sin(angle),endR*cos(angle),endR*sin(angle))
        
      }
      line(10,0,0,0)
      
		pop()
		
      //body
		push()
			translate(mouseX-220,mouseY-random(150,170))
			scale(0.4)
			translate(350,200)
			// useColor.setAlpha(255)
			// fill(useColor)
			// stroke("white")
			fill("black")
			beginShape()
				vertex(97,130)
				// vertex(20,200)
				curveVertex(97, 130);
				curveVertex(193, 106);
				curveVertex(274,137);
				curveVertex(310,206);
				curveVertex(248,287);
				curveVertex(133,283);
				curveVertex(54,223);
				curveVertex(97, 130);
			endShape(CLOSE)
		pop()
	//eyes
 		push()
			fill(0)
			stroke(255)
			strokeWeight(3)
		if(frameCount%5==0){
			let eyeW=5+random(0,5)
			let eyeH=8					
			ellipse(mouseX-8,mouseY-5,eyeW,eyeH)
			ellipse(mouseX+8,mouseY-5,eyeW,eyeH)
		}
	
		pop()
      
	pop()
      // image(grassGraphics,0,0)
	}
  
  
//   //最後的彩虹堂堂
	if(frameCount%50==0){
			for(let i=0;i<20;i++){
		fill(random(colors))
		noStroke()
		let candyW=random(15,20)
		ellipse(random(width),random(height), candyW, candyW+2,int(random(6,8)) );
	}
	}
}