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

     function kastTerning() {
      return Math.floor(Math.random() * 6) + 1;
    }

     function kastFem() {
      const arr = [];
      for (let i = 0; i < 5; i++) arr.push(kastTerning());
      return arr;
    }

    function visTerninger(container, arr) {
      container.innerHTML = ''; 
      arr.forEach(val => {
        const d = document.createElement('div');
        d.className = 'die';
        d.textContent = val;
        d.setAttribute('aria-label', 'Terning: ' + val);
        container.appendChild(d);
      });
    }

      function højeste(arr) {
      return Math.max(...arr);
    }

    function kørRunde() {
      if (gameOver) return;
      
      const pKast = kastFem();
      const cKast = kastFem();
      visTerninger(playerDiceEl, pKast);
      visTerninger(computerDiceEl, cKast);
      const pHigh = højeste(pKast);
      const cHigh = højeste(cKast);
      playerHighEl.textContent = pHigh;
      computerHighEl.textContent = cHigh;
      let tekst;
      if (pHigh > cHigh) {
        playerScore++;
        playerScoreEl.textContent = playerScore;
        tekst = `Du vandt runden! Din højeste ${pHigh} vs computers ${cHigh}.`;
      } else if (cHigh > pHigh) {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        tekst = `Computeren vandt runden. Din højeste ${pHigh} vs computers ${cHigh}.`;
      } else {
        tekst = `Uafgjort denne runde — begge havde ${pHigh}.`;
      }  
      messageEl.innerHTML = tekst;
      if (playerScore >= TARGET_SCORE || computerScore >= TARGET_SCORE) {
        gameOver = true;
        const vinder = playerScore > computerScore ? 'Du' : (computerScore > playerScore ? 'Computeren' : 'Ingen (uafgjort)');
        finalEl.innerHTML = `<div class="winner">${vinder} vandt spillet! (Spiller ${playerScore} — Computer ${computerScore})</div>`;
        rollBtn.disabled = true;
      }
    }

    function resetSpil() {
        playerScore = 0;
        computerScore = 0;
        gameOver = false;
        playerScoreEl.textContent = '0';
        computerScoreEl.textContent = '0';
        playerHighEl.textContent = '-';
        computerHighEl.textContent = '-';
        playerDiceEl.innerHTML = '';
        computerDiceEl.innerHTML = '';
        messageEl.innerHTML = 'Spillet er nulstillet. Tryk <strong>Kast terninger</strong> for at starte igen.';
        finalEl.innerHTML = '';
        rollBtn.disabled = false;
      }
  
     
      rollBtn.addEventListener('click', kørRunde);
      resetBtn.addEventListener('click', resetSpil);
  

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !gameOver) kørRunde();
      });
