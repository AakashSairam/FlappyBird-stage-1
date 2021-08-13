var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var score = 0;
var database;

var form, player, game;
var birdImg;
var pipe1Img,pipe2Img,pipe3Img,pipe4Img;
var bg;
var bird1 ,bird2;
var pipe;
var bird=[]


function preload(){
   birdImg = loadImage("sprites/bird.png");
   bg = loadImage("sprites/bg.png");
   pipe1Img = loadImage("sprites/pipes-1.png");
   pipe2Img = loadImage("sprites/pipes-2.png");
   pipe3Img = loadImage("sprites/pipes-3.png");
   pipe4Img = loadImage("sprites/pipes-4.png");
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
