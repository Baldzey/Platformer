var database, form, player;
var gameState = 0;
var allPlayers;
var playerCount;
var bg, bgImg;


function preload(){

    bgImg = loadImage("images/e.png");

}


function setup(){
    canvas = createCanvas(displayWidth, displayHeight);
    console.log(width);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){






}