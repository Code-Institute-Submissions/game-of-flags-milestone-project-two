// ----------------------------------------------Sound Variables

const bgSound = new Audio("assets/sounds/background-sound.mp3");
const flipSound = new Audio("assets/sounds/card-flip-sound.wav");
const matchSound = new Audio("assets/sounds/card-match-sound.wav");
const gameCompleteSound = new Audio("assets/sounds/game-complete-sound.wav");
const gameOverSound = new Audio("assets/sounds/game-over-sound.wav");
const gameVictorySound = new Audio("assets/sounds/game-victory-sound.wav");

//------------------------------------------- Game Button Variables

const startGameButton = $("new-game-button");
const playNextLevelButton = $("#play-next-level-button");
const volumeControl = $(".sound-control")
const closeGameInfoButton = $(".close-game-info-button");

// ------------------------------------------ Variables

let gameRecord = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //keep track of flip cards
let imageRecord = []; //keep track of randomly loaded and yet to be loaded images
let flipIndex; //keep track of the number of flipped cards
let randomNumber; //will be used to randomly generate numbers
let cardTextRecord = []; // store the string of images and check for comparison
let cardRecord = []; //store the id of every 2 flipped cards
let cardNumber = []; //extract the number of the particular id of flipped cards
let front; //dynamically contain the front element of the card
let back; //dynamically contain the back element of card
let cardCheck = 0; //Restrict only two cards to be flipped and checked at a time
let score = 0; //number of matches made
let status = 0; //keep track of the randomNumber's uniqueness
let countDown; //keep track of countdown timer
let secondsInput = 60; //keep track of timer from 60seconds
let seconds = secondsInput; 
let gameLevel = 1; // start game from level 1
let currentLevel = gameLevel; //will increment as game level changes
let gameOver = false; 











