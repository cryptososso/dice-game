// game state variable 

let player1Score = 0;
let player2Score = 0;
let player1Balance = 100;
let player2Balance = 100;
let player1Turn = true;

// variables to store references to DOM nodes
const message = document.getElementById('message');
const player1Dice = document.getElementById('player1Dice');
const player2Dice = document.getElementById('player2Dice');
const player1ScoreBoard = document.getElementById('player1ScoreBoard');
const player2ScoreBoard = document.getElementById('player2ScoreBoard');
const player1Cash = document.getElementById('player1Balance');
const player2Cash = document.getElementById('player2Balance');
const rollBtn = document.getElementById('rollBtn');
const resetBtn = document.getElementById('resetBtn');

function changeDisplay(){
   rollBtn.style.display= "none";
   resetBtn.style.display = "block";
}
// add Event listener
resetBtn.addEventListener('click', reset);

rollBtn.addEventListener('click', function(){
  const randomNumber = Math.floor(Math.random() * 6) + 1;
   

   if(player1Turn){
      player1Score += randomNumber;
      player1ScoreBoard.textContent = player1Score;
      player1Dice.textContent = randomNumber;
      player1Dice.classList.remove('active');
      player2Dice.classList.add('active');
      message.textContent = "Player 2 Turn";
   }else{
      player2Score += randomNumber;
      player2ScoreBoard.textContent = player2Score;
      player2Dice.textContent = randomNumber;
      player2Dice.classList.remove('active');
      player1Dice.classList.add('active');
     message.textContent = "Player 1 Turn";
   }

   if(player1Score >= 20){
      message.textContent = "Player 1 has won";
      player1Balance += 20;
      player1Cash.textContent = `$${player1Balance}`;
      player2Balance -= 20;
      player2Cash.textContent = `$${player2Balance}`;
    changeDisplay();
   }else if(player2Score >= 20){
      message.textContent = "Player 2 has won";
      player2Balance += 20;
      player2Cash.textContent = `$${player2Balance}`;
      player1Balance -= 20;
      player1Cash.textContent = `$${player1Balance}`;
    changeDisplay();
   }


    if(player1Turn){
       player1Turn = false;
   }else{
        player1Turn = true;
    }

    if(player1Balance === 0){
       message.textContent = `Player 1 Game Over`
    }else if(player2Balance === 0){
      message.textContent = `Player 2 Game Over`
    }

   //player1Turn = !player1Turn;
   
})


function reset(){
   message.textContent = "Player 1 Turn";
   player1ScoreBoard.textContent = 0;
   player2ScoreBoard.textContent = 0;
   player1Dice.textContent = "-";
   player2Dice.textContent = "-";
   player1Score = 0;
   player2Score = 0;
   player1Turn = true;
   resetBtn.style.display = "none";
   rollBtn.style.display = "block";
   player2Dice.classList.remove('active');
   player1Dice.classList.add('active');
}



