/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//document.querySelector("#current-" + activePlayer).textContent = dice;
// document.querySelector("#current-" + activePlayer).innerHTML =
//   "<em>" + dice + "</em>";
// var x = document.querySelector("#score-0").textContent;
// console.log(x);

var scores, roundScore, activePlayer, inGame, previousScore, winScore;

init();

//set score for win
document.querySelector(".set-win").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    //Undefined, 0 null or "" are coerced to false
    //anything else coerced to true
    if (e.target.value) {
      winScore = e.target.value;
      console.log(e.target.value);
    } else {
      winScore = 100;
    }
  }
});

//when roll a dice
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (inGame) {
    //1. Random number
    var dice_1 = Math.floor(Math.random() * 6) + 1;
    var dice_2 = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    var diceDOM_1 = document.querySelector(".dice-1");
    diceDOM_1.style.display = "block";
    diceDOM_1.src = "dice-" + dice_1 + ".png";

    var diceDOM_2 = document.querySelector(".dice-2");
    diceDOM_2.style.display = "block";
    diceDOM_2.src = "dice-" + dice_2 + ".png";

    //3. Update the round score IF the rolled number was NOT a 1
    if (dice_1 !== 1 && dice_2 != 1) {
      //Add score
      if (roundScore === 0) {
        previousScore = dice_1 + dice_2;
      }

      if (dice_1 + dice_2 === previousScore && dice_1 + dice_2 === 6) {
        // roundScore = 0;
        scores[activePlayer] = 0;
        document.querySelector("#score-" + activePlayer).textContent = "0";
        nextPlayer();
      }

      previousScore = dice_1 + dice_2;
      roundScore += dice_1 + dice_2;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      //next player
      nextPlayer();
    }
  }
});

//Hold the current score and add the score to the play score, next player
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (inGame) {
    //get roundScore add it to scores
    scores[activePlayer] += roundScore;

    //change score board of current player
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    //check win
    if (scores[activePlayer] >= winScore) {
      //change player panel to win and not active
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice-1").style.display = "none";
      document.querySelector(".dice-2").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      inGame = false;
    } else {
      //next player
      nextPlayer();
    }
  }
});

function nextPlayer() {
  //roundScore change to 0
  roundScore = 0;

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  document.querySelector(".dice-1").style.display = "none";
  document.querySelector(".dice-2").style.display = "none";
}

//when hit the new game button the game will be set to init
document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  inGame = true;

  //set all score to 0
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".dice-1").style.display = "none";
  document.querySelector(".dice-2").style.display = "none";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.add("active");

  document.querySelector(".set-win").innerHTML =
    '<input class="set-score" type="text" placeholder="set score for win" />';
}
