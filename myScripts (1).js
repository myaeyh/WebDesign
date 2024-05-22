function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	frameRate(60); // frame / sec
}

function draw() {
	// 淡化
	// background(255, 255, 255, 5);

	// 線條
	strokeWeight(2)

	// 對話框位置
	let x = random(width)
	let y = random(height)

	// 文字
	textSize(30)
	let texts = ["Hello", "Marco", "Cool", "Fight", "Best"]
	let myText = random(texts)
	let myTextWidth = textWidth(myText) + 20

	// 對話框
	if (random() < 0.5) {
		// 黑底
		fill(0) // black
		rect(x, y, myTextWidth, 50, 10, 10)

		// 白字
		fill(255) // white
		text(myText, x, y + 50)
		
	} else {
		// 白底
		fill(255)
		rect(x, y, myTextWidth, 50, 10, 10)

		// 黑字
		fill(0)
		text(myText, x, y + 50)
	}
}
