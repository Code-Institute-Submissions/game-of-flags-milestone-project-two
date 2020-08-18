# [GAME OF FLAGS](https://takaforyannick30.github.io/game-of-flags-milestone-project-two/) - Milestone Project Two

## Table of Content

## About

The Game Of Flags application is a simple replica of a classical memory card game. The aim of the game is to match all pairs of flags before the time runs out. It requires observation, concentration, and a good memory to win. The game is also known as Concentration, Pelmanism, Shinkei-suijaku, Pexeso, and Pairs. You can find out more about the concentration game by visiting the [Wikipedia](https://en.wikipedia.org/wiki/Concentration_(card_game)) page and the rules of a classical table card game [here](https://www.classicgamesandpuzzles.com/Memory.html).

I created this game to serve the purpose of my Interactive Frontend Development Project. The project scope was to create the game using HTML, CSS, and Javascript, with the main focus being the functional logic created with Javascript. The name of this application was inspired by two things; firstly, my love for Game of Thrones and secondly, the choice of images for the project.

## UX

### User Stories

* I want a game I can play to improve my memory.
* I want the game to be presented in a visually appealing and non-distracting way.
* I want to be able to play the game on any device.
* I want to be presented with a brief instruction of what I need to do to win the game.
* I want to hear a game background sound when am playing the game and I would like to be able to mute it if I chose to.
* I want to hear a flip sound when I flip a card.
* I want to hear a matching sound when I match a pair of flags.
* I want to be notified I won the game if I match all pair of flags within the given time frame.
* I want to be notified I lost the game if I run out of time.

### Research

To understand the game, I researched existing versions of the Javascript memory card matching game on Youtube and Udemy. And it gave me an idea of the layout and functionality implemented in the tutorials. This greatly inspired me with features I could implement in my own version of the game.

### Style Rationale

I wanted to keep it simple while practicing responsive design. In order to make different elements visually distinct, I chose a color palette of soft contrasting colors that complement each other.

### Wireframes

The wireframes used in this project were built using Balsamiq Wireframes. These were the first versions but in the development process, there were many changes. For example, initially, I had planned to include "Game Info" as one of the features but I later decided to delete it and maintain a brief game instruction on the game-intro-overlay which appears on the start screen. 

In addition, I was planning to add 3 game levels but because I could not achieve this within the given time frame I had, I decided I will implement it in the nearest future and as such, I had to delete "level: 1" from the app because it was meant to indicate the current game level. And if it's just a one-level game then indicating the current level will be pointless. 

Also, I don't have additional wireframes for levels 2 and 3 because I was planning to maintain the same number of cards but change just the time from 60 seconds, 50 seconds, and 40 seconds for level 1, level 2, and level 3 respectively.

[Start Screen Wireframes ](https://github.com/Takaforyannick30/game-of-flags-milestone-project-two/blob/master/assets/wireframes/game-complete-wireframe-idea.pdf)

[Game Screen Wireframes](https://github.com/Takaforyannick30/game-of-flags-milestone-project-two/blob/master/assets/wireframes/game-screen-wireframe-idea.pdf)

[Victory Screen Wireframes](https://github.com/Takaforyannick30/game-of-flags-milestone-project-two/blob/master/assets/wireframes/victory-screen-wireframe-idea.pdf)

[Game Complete Screen Wireframes](https://github.com/Takaforyannick30/game-of-flags-milestone-project-two/blob/master/assets/wireframes/game-complete-wireframe-idea.pdf)

[Game Over Screen Wireframes](https://github.com/Takaforyannick30/game-of-flags-milestone-project-two/blob/master/assets/wireframes/game-over-wireframe-idea.pdf)

## Features

### Functionality
* The game starts with an overlay containing a "play" button which starts the game when clicked.  
* The pointer changes to a hand when hovered over the cards and overlays.  
* The cards increase in size when hovered over.
* When a card is flipped the player hears a flip sound.* Matches made are counted all through the game. * Time countdown - the user has 60 seconds to match all cards.  
* "Victory" overlay appears when the player matches all cards within 60seconds with a "play-again" button which takes the user back to the home page.
* "Game Over" overlay appears when the player fails to match all cards within 60 seconds.
* All cards can't be seen at the same time. If a player clicks on one card, it stays flipped. When clicking on a second card it flips and both cards then turn back if it is not a match.  
* The game reloads when a player clicks on "Reset", "Play Again" and "Try Again" * Background sound starts playing as soon as the game starts. The player also hears sounds when a match is made, when game is won and when game is lost.

### Existing features

* **Game Intro overlay**
* **Mute and Unmute button** for background music
* **Cards**
* **Timer**
* **match counter**
* **Victory overlay**
* **Game Over overlay**

### Features Left To Implement

* Add more game levels. At the moment the game has just one level but in the nearest future I would love to add more game levels to make the game more interesting.
* Add a Pause button. I would like to add a pause button which allows users to pause the game.
* Add a Leaderboard. In the nearest future when I learn Python, I would like to implement a highscore leaderboard for players.

## Technologies Used

### languages used

* [HTML](https://en.wikipedia.org/wiki/HTML) 

The use of HTML which stands for Hypertext Markup Language was very paramount to this website as with every website or web-based app. HTML5 was used in this project to keep up with the latest industry standards. 

* [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

The use of CSS which stands for Cascading Style Sheet was also very paramount to this project. CSS was used for styling the content on the website.

* [Javascript](https://en.wikipedia.org/wiki/JavaScript)

Javascript, which is mostly been referred to as JS was used to create the main functional logic of this project.   

### Libraries and framework

* [jQuery](https://jquery.com/)

jQuery is a fast, small, and feature-rich JavaScript library. It was used in this project to simplify the DOM.

* [Google Fonts](https://fonts.google.com/)

Google Fonts is a library of 991 free licensed font families, an interactive web directory for browsing the library, and APIs for conveniently using the fonts via CSS and Android. Fugaz One designed by Latino Type and Roboto designed by Christian Robertson, were both used in this project.  

### Tools used

* [Git](https://git-scm.com/)

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.Git was used in this project for version control.

* [Gitpod](https://www.gitpod.io/)

Gitpod is an online integrated development environment for GitHub. It creates a complete and disposable development environment for any GitHub repository directly in a browser. This project was developed in Gitpod.

* [GitHub]()

GitHub is a code hosting platform for collaboration and version control. GitHub is the platform where the code for this project has been hosted.

* [Dev Tools](https://developers.google.com/web/tools/chrome-devtools)

Chrome DevTools is a set of web developer tools built directly into the Google Chrome browser. DevTools can help you edit pages on-the-fly and diagnose problems quickly, which ultimately helps you build better websites, faster. Google Chrome's Dev Tools was used in the building process of this project.

* [Balsamiq](https://balsamiq.com/)

Balsamiq Wireframes is a rapid low-fidelity UI wireframing tool that reproduces the experience of sketching on a notepad or whiteboard, but using a computer. Balsamiq wireframes was used in producing the wireframes for this project.

##  Testing

This project has undergone extremely thorough testing. The user story of this project achieved the intended outcome. The manual test was carried out at every stage to ensure user experience standards remained at consistently high levels with each new implementation. 

The Game Of Flags application was tested across multiple browsers such as Google Chrome, Safari, Microsoft Edge, Mozilla Firefox,and Opera Mini. It was also tested on multiple mobile devices such as iPhone 4, 5, 7, 8(plus) Chrome and Safari, iPad, Samsung Galaxy,and Huawei P30 Pro to ensure compatibility and responsiveness.

### Manual Test

* The "Play" button which is on the game-intro-overlay which happens to be the start screen of the game works well as intended. When clicked upon, the intro-overlay fades out and the game starts.

* Clicking a card makes the card to flip. Clicking on all cards fast does not flip the cards as only two cards can be flipped at a time. When two cards are flipped, they are being checked for comparison and will flip back or remain open if they are not the same or if they are the same respectively.

* Clicking on the "Mute" button results in the background sound being paused while the text of the button changes to Unmute. And when clicked on the "Unmute" button the background sound will resume and the text of the button will change to mute.

* The "Reset" button also works well as intended. When clicked upon the game reloads.* All pairs of flags have been matched multiple times within 60 seconds. Upon matching all pairs of flags within the given time frame, a victory popup with a heading "Congratulations"  appears notifying the player of the victory.

* I have also let the timer run out many times to check if I will be notified of losing. When all cards are not matched within 60 seconds, a popup with a heading "You Lose" appears.

* The popup which appears upon winning or losing contains a "Play Again" and a "Try Again" button respectively. When clicked upon any of these buttons the game reloads. 

* The game's timer indicates the time correctly and stops counting down when all cards are matched or when it gets to zero.

### Errors

**Resolved Errors**

* During the development of this app, I realized that the image of the World map which appeared on the start screen of the game could be dragged. I solved this problem using the following Javascript code `$("#intro-overlay-image").attr('draggable', false);`

**Unresolved Errors**

* If a player clicks on the cards too fast, only the first flip sound gets played. The second flip sound does not get played because the first signal is already "busy". This easily occurs when playing on mobile or tablet because it is easier to flip fast when using these mentioned devices compared to desktop.

## Deployment

This project has been deployed to Github Pages from the master branch. A link to the deployed version of the site can be found [here]( https://takaforyannick30.github.io/game-of-flags-milestone-project-two/).

This site was developed using Gitpod. All changes to the code were then added and committed to a local repository. The commits were then pushed to my GitHub repository.The process can be seen as bellow;

`git add (add file name)`

`git commit -m (add a commit mesage)` with "initial commit" always serving as the first commit message to a new repository.

`git push` 

 The project was hosted using GitHub pages directly from the master branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named index.html. The process of deploying this project on GitHub pages can be seen as bellow; 

* Go to the settings tab of the repository, and scroll down to GitHub pages.

* Under GitHub pages, click on "source" and select the master branch.

* You will be automatically taken to the top of the page wherein a light blue bar will be stated: "GitHub pages source saved".

* Scroll down to GitHub pages where will be stated "your site is ready to be published at "[ https://takaforyannick30.github.io/game-of-flags-milestone-project-two/]( https://takaforyannick30.github.io/game-of-flags-milestone-project-two/)".

* Click on the URL and you will be auto-referred to the published webpage. When returning to the GitHub repository setting, scroll down to GitHub pages and you will see a light green block stating "Your site is published at " [ https://takaforyannick30.github.io/game-of-flags-milestone-project-two/]( https://takaforyannick30.github.io/game-of-flags-milestone-project-two/)".

To run locally, you can clone this repository directly into the editor of your choice by pasting `git clone   https://takaforyannick30.github.io/game-of-flags-milestone-project-two.git` into your terminal. To cut ties with this GitHub repository, type `git remote rm origin` into the terminal.

You can submit a pull request to the master branch and await approval. To do this:

* Navigate to the [original repository]( https://takaforyannick30.github.io/game-of-flags-milestone-project-two)

* Click on **New pull request** on the right of the Branch menu

* On the compare page, click **compare across forks**

* Confirm that the base fork is the repository you'd like to merge into

* Use the head fork drop-down menu to select your fork,then use the compare branch drop-down menu to select the branch you made your changes in* Type a little description for your pull request

* If you do not want to allow anyone with push access to the upstream repository to make changes to your PR, unselect **Allow edits from maintainers**

* Click **Create pull request**

## Credits

### Content

* Most of the functionality implemented in this project are things I learnt from a tutorial I bought from Udemy titled "[Learn Javascript by creating a memory game with high scores](https://www.udemy.com/course/javascript-game-with-facebook-login-and-high-scores/learn/lecture/16943398#overview)". The author of the course is Yashin Soraballee.

* [w3schools.com](https://www.w3schools.com/) was very helpful and it was my main source of reference during the development of this project.

* The shuffle function I used in my Javascript code was copied from [w3resource.com](https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php).

### Media
* The images of all flags used in this project were obtained from [COUNTRYFLAGS.com](https://www.countryflags.com/en/image-overview/)

* The image of the World map which appears on the game start screen and in the front of all cards was obtained from [PNGITEM](https://www.pngitem.com/middle/hiwommi_world-map-in-3d-transparent-hd-png-download/).

* All the sounds used in this project were obtained from [freesound](https://freesound.org/).

* The Gifs used on the results popup of this project were obtained from [gifer.com](https://gifer.com/en/gifs/thumbs-up).

### Acknowledgement
* I received inspiration for this project from a similar game app project titled [Juicy Fruit](https://github.com/sabinemm/fruit-game).

* A special thanks to my mentor, Sandeep Aggarwal, for his feedback on my project's scope, design and functionality, and for hints on what information to include in my README.md.  

### Disclaimer

This project is for educational purposes only.


[Back to top ↑](##Table-of-Content)

