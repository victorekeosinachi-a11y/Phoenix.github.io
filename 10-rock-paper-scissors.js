let scores = 
    JSON.parse(localStorage.getItem('scores'));

    if (scores === null) {
      scores = {
        Wins: 0,
        losses: 0,
        ties: 0,
      };
    }

    updateScoreElement();
    

    


    function playGame(playerMove) {
       const computerMove = pickComputerMove();



      
        let resultPhoenix = '';


        if (playerMove === 'Scissors') {
            if (computerMove ===  'Rock') {
            resultPhoenix ='You Lose'
          } else if (computerMove === 'Paper') {
            resultPhoenix = 'You win'
          } else if (computerMove === 'Scissors'){
            resultPhoenix = 'Tie'
          }

        } else if (playerMove === 'Paper') {
          if (computerMove ===  'Rock') {
        resultPhoenix ='You win'
      } else if (computerMove === 'Paper') {
        resultPhoenix = 'Tie'
      } else if (computerMove === 'Scissors'){
        resultPhoenix = 'You Lose'
      }
      
    }else if (playerMove === 'Rock') {
      
  if (computerMove ===  'Rock') {
    resultPhoenix ='Tie'
  } else if (computerMove === 'Paper') {
    resultPhoenix ='You Lose'
  } else if (computerMove === 'Scissors'){
    resultPhoenix ='You win'
  }
    }
    if (resultPhoenix === 'You win') {
      scores.Wins += 1;
    } else if (resultPhoenix === 'You Lose') {
      scores.losses += 1;
    } else if (resultPhoenix === 'Tie') {
      scores.ties += 1;
    }
    localStorage.setItem('scores' , JSON.stringify(scores));

    updateScoreElement();

    document.querySelector('.js-result').
    innerHTML = resultPhoenix;

    document.querySelector('.js-moves').innerHTML = `You 

    <img src ="javascript-course/${playerMove.toLowerCase()}-emoji.png" class="move-icon"> 
    <img src ="javascript-course/${computerMove.toLowerCase()}-emoji.png" class="move-icon">Computer`;
    }

      function updateScoreElement() {
        document.querySelector('.js-score')
      .innerHTML = ` Wins: ${scores.Wins}, losses: ${scores.losses}, ties: ${scores.ties}`;
      }
        

          
    let computerMove = '';
      

      function pickComputerMove() {
        const randomNumber = Math.random();

        
        
        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'Rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'Paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = 'Scissors';
        }
        return computerMove;


    }