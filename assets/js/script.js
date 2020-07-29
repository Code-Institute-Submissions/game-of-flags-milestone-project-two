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

let flags = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" ];


let gameRecord = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //keep track of flip cards
let imageRecord = []; //keep track of randomly loaded and yet to be loaded images
let flipIndex = 0; //keep track of the number of flipped cards
let firstFlippedCard;//keep track of the first flipped card
let secondFlippedCard;// keep track of the second flipped card 
let previousCard; // keep track of the previous flipped card
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

// ------------------------------- Variables retrieve from HTML elements

let gameArea = $("#deck-of-cards-container");
let time = $(".time-left");
let scoreRecord = $(".matches-made");
let flipsRecord = $(".flips-made");
let levelRecord = $(".current-level");
let victoryResult = $("#result-for-success");
let finalVictoryResult = $("result-for final success");
let faillureResult = $("#result-for-faillure");


// Hide intro Overlay
$(".new-game-button").click( ()=> {
    bgSound.play();
    $("#intro-section").fadeOut();
    createCards();
});

// Create cards dynamically
function createCards() {

    flags = shuffle(flags);

    for(let i=0; i<20; i++){
        let card = "<div class='card'><div class='flip-card' id='card"+i+"' onclick='selectCard("+i+","+flags[i]+")'><div class='front-of-card'></div><div class='back-of-card' style='background-image:url(assets/images/flag"+flags[i]+".png'></div></div></div>";
        gameArea.append(card);
    }
}


// Make the flipping work and compare for similarity
function selectCard(id,current){
    console.log(id, current);
    let cardId = `#card${id}`;
    if(!$(cardId).hasClass('flipCard180') && flipIndex!=2){
        $(cardId).addClass('flipCard180');
        flipSound.play();

        flipIndex++

        if(flipIndex == 1){
            firstFlippedCard = current;
            previousCard = cardId;
        }
        if(flipIndex == 2){
            secondFlippedCard=current;
            if(firstFlippedCard == secondFlippedCard){
                matchSound.play();
                setTimeout(function(){
                    flipIndex = 0;
                }, 500)
            }else{
                setTimeout(function(){
                    $(cardId).removeClass('flipCard180');
                    $(previousCard).removeClass('flipCard180');
                    flipIndex = 0;
                }, 500)
            }
        }
    }
}

// function to shuffle the flags copied from w3resource.com
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

// Function to start a new game by reloading the page

$(".new-game").click(function newGame(){
    window.location.reload();  
});








