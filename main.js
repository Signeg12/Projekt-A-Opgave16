const TARGET_SCORE = 5;

let playerScore = 0;
    let computerScore = 0;
    let gameOver = false;

    const playerDiceEl = document.getElementById('playerDice');
    const computerDiceEl = document.getElementById('computerDice');
    const playerScoreEl = document.getElementById('playerScore');
    const computerScoreEl = document.getElementById('computerScore');
    const playerHighEl = document.getElementById('playerHigh');
    const computerHighEl = document.getElementById('computerHigh');
    const messageEl = document.getElementById('message');
    const rollBtn = document.getElementById('rollBtn');
    const resetBtn = document.getElementById('resetBtn');
    const finalEl = document.getElementById('final');