function preload() {
	world_start = loadSound("world_start.wav");
    mariojump=loadSound("jump.wav");
    mariocoin=loadSound("coin.wav");
    mariogameover=loadSound("gameover.wav");
    mariokick=loadSound("kick.wav");
    mariodie=loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video= createCapture(VIDEO);
	video.size(600,300);
	video.parent('gameconsole');
	posenet=ml5.poseNet(video, modelloaded);
	posenet.on('pose', gotposes);
}

function modelloaded(){
	console.log("results");
}

function gotposes(results){
	if (results.length>0){
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;

	}
}

function draw() {
	game()
}






