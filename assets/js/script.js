// ----------------------------------------------Sound Variables

const bg_Sound = new Audio("assets/sounds/background-sound.wav");
const flip_Sound = new Audio("assets/sounds/card-flip-sound.wav");
const match_Sound = new Audio("assets/sounds/card-match-sound.wav");

const game_Over_Sound = new Audio("assets/sounds/game-over-sound.wav");
const game_Victory_Sound = new Audio("assets/sounds/game-victory-sound.wav");

// ------------------------------------------ Variables

let flags = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" ];

let flipIndex = 0; //keep track of the number of flipped cards
let firstFlippedCard;//keep track of the first flipped card
let secondFlippedCard;// keep track of the second flipped card 
let previousCard; // keep track of the previous flipped card
let score = 0; //number of matches made
let countDown; //keep track of countdown timer
let secondsInput = 60; //keep track of timer from 60seconds
let seconds = secondsInput; 
let gameOver = false; 

// ------------------------------- Variables retrieve from HTML elements

let gameArea = $("#deck-of-cards-container");
let time = $(".time-left");
let scoreRecord = $(".matches-made");

// Function to prevent intro-overlay-image from being dragged
$("#intro-overlay-image").attr('draggable', false);

// Function to hide intro Overlay
$(".new-game-button").click( ()=> {
    bg_Sound.play();
    $("#intro-section").fadeOut();
    createCards();
});

// Function to Create cards dynamically
function createCards() {

    flags = shuffle(flags);

    for(let i=0; i<20; i++){
        let card = "<div class='card'><div class='flip-card' id='card"+i+"' onclick='selectCard("+i+","+flags[i]+")'><div class='front-of-card'></div><div class='back-of-card' style='background-image:url(assets/images/flag"+flags[i]+".png'></div></div></div>";
        gameArea.append(card);
    }
    startCountdown(seconds);
}


// Function to make the flipping work and compare for similarity
function selectCard(id,current){
    console.log(id, current);
    let cardId = `#card${id}`;
    if(!$(cardId).hasClass('flipCard180') && flipIndex!=2){
        $(cardId).addClass('flipCard180');
        flip_Sound.play();

        flipIndex++;

        if(flipIndex == 1){
            firstFlippedCard = current;
            previousCard = cardId;
        }
        if(flipIndex == 2){
            secondFlippedCard = current;
            if(firstFlippedCard == secondFlippedCard){
                score++;
                // call the showResult function if a player matches all cards
                if (score == 10){
                    clearTimeout(countDown);
                    setTimeout(function(){showResult();},1000);
                    return;   
                }

                scoreRecord.text(score+"/10");
                flip_Sound.pause();
                match_Sound.play();
                setTimeout(function(){
                    flipIndex = 0;
                }, 500);
            }else{
                setTimeout(function(){
                    $(cardId).removeClass('flipCard180');
                    $(previousCard).removeClass('flipCard180');
                    flipIndex = 0;
                }, 500);
            }
        }
    }
}

// Function to shuffle the flags copied from w3resource.com
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

// Function to start countdown from 60 seconds when game begins
function startCountdown(seconds){
    time.text(secondsInput);
     // call the showResult function if a player runs out of time
    if(secondsInput == 0){
        clearTimeout(countDown);
        setTimeout(function(){showResult();},1000);
        return;
    }
    secondsInput--;
    countDown = setTimeout(function(){startCountdown(seconds);},1000);  
}

// Function to make a fancy display of game result
function showResult(){
    gameOver = true;
    bg_Sound.pause();
     $("#result-section").show();
    
    if(score == 10){
        game_Victory_Sound.play();
        $("#result-for-success").show();
        $("#play-again-button").show();
    }
    else{
        game_Over_Sound.play();
        $("#result-for-failure").show();
        $("#try-again-button").show();
    }
}

// Function to relaod/restart the game when the "play-again" button is clicked
$("#play-again-button").click(function(){   
     window.location.reload();
});

// Function to reload/restart the game when the "try-again" button is clicked
$("#try-again-button").click(function(){   
     window.location.reload();
});

// Function to mute the background sound of the game 
$(".mute-button").click(function(){
    bg_Sound.pause();
    $(".mute-button").hide();
    $(".unmute-button").show();
});

//  Function to unmute the background sound of the game
$(".unmute-button").click(function(){
    bg_Sound.play();
    $(".unmute-button").hide();
    $(".mute-button").show();
});



// Function to start a new game by reloading the page
$(".new-game").click(function newGame(){
    window.location.reload();  
});










