/*
	Ver.1.0
	Author: Annan Wang
	Date: Oct 21 2018
*/

var s;
var scl = 20;
var score, bestScore;
var buttonSU, buttonSD;
var speedRate, speedLabel;

var food;

function setup() {
	speedRate = 10;
	buttonSU = createButton("Faster");
	buttonSU.mousePressed(buttonSU_Clicked);
	buttonSD = createButton("Slower");
	buttonSD.mousePressed(buttonSD_Clicked);
	speedLabel = document.createElement("speedlabel");
    document.body.appendChild(speedLabel);
    speedLabel.innerHTML = "  Speed: 10";
    speedLabel.style.fontSize = "20px";
	createP('');

	createCanvas(700, 700);
	s = new Snake();
	frameRate(10);
	pickLocation();
	moreFood = false;
	score = 0;
	bestScore = 0;
	
	createP('');
	scoreLabel = document.createElement("scorelabel");
    document.body.appendChild(scoreLabel);
    scoreLabel.innerHTML = "Score: 0  Best: 0";
    scoreLabel.style.fontSize = "20px";

}

function buttonSU_Clicked(){
	if(speedRate < 50){
		speedRate += 5;
		frameRate(speedRate);
	}
}

function buttonSD_Clicked(){
	speedRate -= 5;
	frameRate(speedRate);
}

function pickLocation() {
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl);
}

function draw() {
	background(51);

	if (s.eat(food)) {
		pickLocation();
		score += 100;
		if(score > bestScore){
			bestScore = score;
		}
	}
	if(s.death()){
		score = 0;
	}
	s.update();
	s.show();

	fill(173, 255, 45);
	rect(food.x, food.y, scl, scl);

	scoreLabel.innerHTML = "Score: " + score + "  Best: " + bestScore;
	speedLabel.innerHTML = "  Speed: " + speedRate;
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		s.dir(0, -1);
	}else if (keyCode === DOWN_ARROW){
		s.dir(0, 1);
	}else if (keyCode === RIGHT_ARROW){
		s.dir(1, 0);
	}else if (keyCode === LEFT_ARROW) {
		s.dir(-1, 0);
	}
}