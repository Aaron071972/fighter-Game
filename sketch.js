
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg, bgImg
var fighter1, fighter1Img, fighter2, fighter2Img, fighter3, fighter3Img, fighter4, fighter4Img, fighter5, fighter5Img, fighter6, fighter6Img, fighter7, fighter7Img, fighter8, fighter8Img
var fighter9, fighter9Img, fighter10, fighter10Img
var f1_attack2,f1_attack2, f1_attack3,f1_attack4;
var player, game, form

var f2_a1, f2Idle

var gameState = 0;
var playerCount;
var allPlayers;
var database;
var fighters

var fb1, fb2;

var f1_score=100
var f2_score=100

var fireBall, wolfBall
var fighter1, fighter2

var f1_attack1, f2_attack1, f2_attack2, f1_attack2
var ground, topGround, rightground, leftground

var health, health2

var F1Left, F1Right, F1_Up, F2Left, F2Right, F2Jump

actionState=0



function preload(){
	bg=loadImage("bg2.jpg")


	fireballSound=loadSound("Sounds/fireball.mp3")
	slice=loadSound("Sounds/slice.mp3")

	//fighter1run
f1_run = loadAnimation("P1_run/Run__000.png","P1_run/Run__001.png","P1_run/Run__002.png","P1_run/Run__003.png","P1_run/Run__004.png","P1_run/Run__005.png",
"P1_run/Run__006.png","P1_run/Run__007.png","P1_run/Run__008.png","P1_run/Run__009.png")
// //fighter2run
f2_run = loadAnimation("f2_run/Run__000.png","f2_run/Run__001.png","f2_run/Run__002.png","f2_run/Run__003.png","f2_run/Run__004.png","f2_run/Run__005.png",
"f2_run/Run__006.png","f2_run/Run__007.png","f2_run/Run__008.png","f2_run/Run__009.png")


//fighter1stand
f1Idle= loadAnimation("idle/Idle__000.png")
//fighter2stand
f2Idle = loadAnimation("f2_idle/Idle__000.png")


//fighter1Attack2
f1_a2=loadAnimation("P1_attack/Attack__000.png","P1_attack/Attack__001.png","P1_attack/Attack__002.png","P1_attack/Attack__003.png","P1_attack/Attack__004.png","P1_attack/Attack__005.png",
"P1_attack/Attack__006.png","P1_attack/Attack__007.png","P1_attack/Attack__008.png","P1_attack/Attack__009.png")
//fighter2Attack1
f2_a1 = loadAnimation("f2_a1/Attack__000.png","f2_a1/Attack__001.png","f2_a1/Attack__002.png","f2_a1/Attack__003.png","f2_a1/Attack__004.png","f2_a1/Attack__005.png","f2_a1/Attack__006.png",
"f2_a1/Attack__007.png","f2_a1/Attack__008.png","f2_a1/Attack__009.png")


//fighter1Jump
f1Jump= loadAnimation("f1_jump/Jump__000.png","f1_jump/Jump__001.png","f1_jump/Jump__002.png","f1_jump/Jump__003.png","f1_jump/Jump__004.png","f1_jump/Jump__005.png",
"f1_jump/Jump__006.png","f1_jump/Jump__007.png","f1_jump/Jump__008.png","f1_jump/Jump__009.png")
//fighter2jump
f2jump= loadAnimation("f2_jump/Jump__000.png","f2_jump/Jump__001.png","f2_jump/Jump__002.png","f2_jump/Jump__003.png","f2_jump/Jump__004.png","f2_jump/Jump__005.png",
"f2_jump/Jump__006.png","f2_jump/Jump__007.png","f2_jump/Jump__008.png","f2_jump/Jump__009.png")



//f1reverseStand
f1Rstand=loadAnimation("f1_reverse/Idle__000.png")
//f2_reverse_stand
f2Rstand=loadAnimation("f2_reverse/Idle__000.png")


//f1_reverse_run
f1Rrun=loadAnimation("f1_reverse/Run__000.png","f1_reverse/Run__001.png","f1_reverse/Run__002.png","f1_reverse/Run__003.png","f1_reverse/Run__004.png","f1_reverse/Run__005.png",
"f1_reverse/Run__006.png","f1_reverse/Run__007.png","f1_reverse/Run__008.png","f1_reverse/Run__009.png")
//f2_reverse_run
f2Rrun=loadAnimation("f2_reverse/Run__000.png","f2_reverse/Run__001.png","f2_reverse/Run__002.png","f2_reverse/Run__003.png","f2_reverse/Run__004.png","f2_reverse/Run__005.png",
"f2_reverse/Run__006.png","f2_reverse/Run__007.png","f2_reverse/Run__008.png","f2_reverse/Run__009.png")

//fighter1dead
f1_dead=loadAnimation("f1_dead/Dead__000.png","f1_dead/Dead__001.png","f1_dead/Dead__002.png","f1_dead/Dead__003.png","f1_dead/Dead__004.png","f1_dead/Dead__005.png","f1_dead/Dead__006.png",
"f1_dead/Dead__007.png","f1_dead/Dead__008.png","f1_dead/Dead__009.png",)
//fighter2dead
f2_dead=loadAnimation("f2_dead/Dead__000.png","f2_dead/Dead__001.png","f2_dead/Dead__002.png","f2_dead/Dead__003.png","f2_dead/Dead__004.png","f2_dead/Dead__005.png","f2_dead/Dead__006.png",
"f2_dead/Dead__007.png","f2_dead/Dead__008.png","f2_dead/Dead__008.png",)

//fighter1hit
f1_hit=loadAnimation("f1_dead/Dead__000.png")
//fighter2hit
f2_hit=loadAnimation("f2_dead/Dead__000.png")

//dead1
dead1=loadAnimation("f1_dead/Dead__009.png")
//dead2
dead2=loadAnimation("f2_dead/Dead__009.png")

//jumpAttack1
f1_JA=loadAnimation("p1_a1/Jump_Attack__000.png","p1_a1/Jump_Attack__001.png","p1_a1/Jump_Attack__002.png","p1_a1/Jump_Attack__003.png","p1_a1/Jump_Attack__004.png",
"p1_a1/Jump_Attack__005.png","p1_a1/Jump_Attack__006.png","p1_a1/Jump_Attack__007.png","p1_a1/Jump_Attack__008.png","p1_a1/Jump_Attack__009.png")
//jumpAttack2
f2_JA=loadAnimation("f2_a2/Jump_Attack__000.png","f2_a2/Jump_Attack__001.png","f2_a2/Jump_Attack__002.png","f2_a2/Jump_Attack__003.png","f2_a2/Jump_Attack__004.png","f2_a2/Jump_Attack__005.png",
"f2_a2/Jump_Attack__006.png","f2_a2/Jump_Attack__007.png","f2_a2/Jump_Attack__008.png","f2_a2/Jump_Attack__009.png")

//fireball1
fb1Img=loadAnimation("img/fireballs1/fireball1.png","img/fireballs1/fireball2.png","img/fireballs1/fireball3.png","img/fireballs1/fireball4.png")
//fireball2
fb2Img=loadAnimation("img/fireballs2/fireball5.png","img/fireballs2/fireball6.png","img/fireballs2/fireball7.png","img/fireballs2/fireball8.png")

//Reverse Fireball
Rfb=loadAnimation("img/fireballs1/Rfireball/fireball1.png","img/fireballs1/Rfireball/fireball2.png","img/fireballs1/Rfireball/fireball3.png","img/fireballs1/Rfireball/fireball4.png")
//Reverse Wolfball
Rwf=loadAnimation("img/fireballs2/Rwolfball/fireball5.png","img/fireballs2/Rwolfball/fireball6.png","img/fireballs2/Rwolfball/fireball7.png","img/fireballs2/Rwolfball/fireball8.png")

//fighter1 reverse jump
f1rj=loadAnimation("f1_reverse/Jump__000.png","f1_reverse/Jump__001.png","f1_reverse/Jump__002.png","f1_reverse/Jump__003.png","f1_reverse/Jump__004.png","f1_reverse/Jump__005.png",
"f1_reverse/Jump__006.png","f1_reverse/Jump__007.png","f1_reverse/Jump__008.png","f1_reverse/Jump__009.png")
//fighter2 reverse jump
f2rj=loadAnimation("f2_reverse/Jump__000.png","f2_reverse/Jump__001.png","f2_reverse/Jump__002.png","f2_reverse/Jump__003.png","f2_reverse/Jump__004.png","f2_reverse/Jump__005.png",
"f2_reverse/Jump__006.png","f2_reverse/Jump__007.png","f2_reverse/Jump__008.png","f2_reverse/Jump__009.png")

//fighter1 reverse attack1
f1ra1=loadAnimation("f1_reverse/Attack__000.png","f1_reverse/Attack__001.png","f1_reverse/Attack__002.png","f1_reverse/Attack__003.png","f1_reverse/Attack__004 (1).png","f1_reverse/Attack__005.png",
"f1_reverse/Attack__006.png","f1_reverse/Attack__007.png","f1_reverse/Attack__008.png","f1_reverse/Attack__009.png")
//fighter2 reverse attack1
f2ra1=loadAnimation("f2_reverse/Attack__000.png","f2_reverse/Attack__001.png","f2_reverse/Attack__002.png","f2_reverse/Attack__003.png","f2_reverse/Attack__004.png","f2_reverse/Attack__005.png",
"f2_reverse/Attack__006.png","f2_reverse/Attack__007.png","f2_reverse/Attack__008.png","f2_reverse/Attack__009.png")

sound=loadSound("Sounds/music.mp3")

//fighter 1 jump attack reverse
f1rja=loadAnimation("f1_reverse/Jump_Attack__000 .png","f1_reverse/Jump_Attack__001.png","f1_reverse/Jump_Attack__002 .png","f1_reverse/Jump_Attack__003 .png","f1_reverse/Jump_Attack__004.png",
"f1_reverse/Jump_Attack__005.png","f1_reverse/Jump_Attack__006.png","f1_reverse/Jump_Attack__007.png","f1_reverse/Jump_Attack__008.png","f1_reverse/Jump_Attack__009.png",)

//fighter2 jump attack reverse
f2rja=loadAnimation("f2_reverse/Jump_Attack__000.png","f2_reverse/Jump_Attack__001.png","f2_reverse/Jump_Attack__002.png","f2_reverse/Jump_Attack__003.png","f2_reverse/Jump_Attack__004.png",
"f2_reverse/Jump_Attack__005.png","f2_reverse/Jump_Attack__006.png","f2_reverse/Jump_Attack__007.png","f2_reverse/Jump_Attack__008.png","f2_reverse/Jump_Attack__009.png",)

}
function setup() {
canvas = createCanvas(displayWidth - 20, displayHeight-30)
	
	database = firebase.database();
	game = new Game();
	game.getState();
	game.start()


	redFireballGroup=new Group();
	blueFireballGroup=new Group();
}


function draw() {
//background(bg)

clear();
let display = touches.length + ' touches';
text(display, 5, 10);


fill("white")
text("Fighter 1 Score: ", f1_score, 200, 300)
fill("white")
text("Fighter 2 Score: ", f2_score, 1840, 300)

fill("white")
text("FireBall", 35, 300)

if(playerCount === 2){
	game.update(1);
}
if(gameState === 1){
	clear();
//sound.play()
	game.play();
}

if(gameState===1){
	textFont('Georgia')
	textSize(45)
	fill('white')
	text("BRAWL NINJAS", displayWidth/2.45, displayHeight/14)
	
// 	// textFont('Georgia')
// 	// textSize(30)
// 	// fill('yellow')
// 	// text("Press Space to Begin", displayWidth/2.55, displayHeight/2.5)
	
 }


if(gameState === 2){
	if(f1_score>f2_score){
		textFont('Georgia')
textSize(75)
fill("red")
text("FIGHTER 1 WINS", displayWidth/3, displayHeight/9)
	}
	else {
textFont('Georgia')
textSize(75)
fill("yellow")
text("FIGHTER 2 WINS", displayWidth/3, displayHeight/9)
	}
	
	game.end()
	
}


// if(keyWentDown(LEFT_ARROW)){
// 	fighter1.changeAnimation("run", fighter1Img)
// 	//stepSound.play()
// }
// if(keyWentDown(RIGHT_ARROW)){
// 	fighter2.changeAnimation("run2", fighter2Img)
// 	//stepSound.play()
// }

//drawSprites()

}




