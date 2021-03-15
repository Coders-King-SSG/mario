var mario_jump, mario_die, mario_game_over, mario_coins, mario_enemy_kill;

function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound('jump.wav');
	mario_game_over = loadSound('gameover.wav');
	mario_coins = loadSound('coin.wav');
	mario_die = loadSound('mariodie.wav');
	mario_enemy_kill = loadSound('kick.wav')
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('gamepad');
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('Posenet initialized');
}

function gotPoses(results) {
	console.log(results);
	if(results.length>0) 
	{
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log('NoseX: ',noseX, 'NoseY: ' , noseY)
	}
}

function draw() {
	game();
}