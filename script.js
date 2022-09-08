function generateRgb() {
    const a = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const c = Math.floor(Math.random() * 255);
    const randomRgb = `rgb(${a}, ${b}, ${c}) `;
  
    return randomRgb;
  }
  
  const rgbText = document.getElementById('rgb-color');
  function changeRgb() {
    generateRgb();
    // rgbText.innerText = generateRgb();
  }
  changeRgb();
  // rgbText.innerText = generateRgb();
  
  const firstBall = document.querySelector('#first-ball');
  const secondBall = document.getElementById('second-ball');
  const thirdBall = document.getElementById('third-ball');
  const fourthBall = document.getElementById('fourth-ball');
  const fifthBall = document.getElementById('fifth-ball');
  const sixthBall = document.getElementById('sixth-ball');
  
  const ballsColor = document.getElementsByClassName('ball');
  
  function changeColor() {
    rgbText.innerText = generateRgb();
  
    for (let index = 0; index < ballsColor.length; index += 1) {
      ballsColor[index].style.backgroundColor = generateRgb();
    }
    const randomNumber = Math.floor(Math.random() * 5);
    ballsColor[randomNumber].style.backgroundColor = rgbText.innerText;
    console.log(randomNumber);
  }
  
  const answerText = document.getElementById('answer');
  
  firstBall.addEventListener('click', () => {
    if (firstBall.style.backgroundColor === rgbText.innerText) {
      answerText.innerText = 'Acertou!';
    } else if (firstBall.style.backgroundColor !== rgbText.innerText) {
      answerText.innerText = 'Errou! Tente novamente!';
    }
    scoreBoard();
  });
  
  secondBall.addEventListener('click', () => {
    if (secondBall.style.backgroundColor === rgbText.innerText) {
      answerText.innerText = 'Acertou!';
    } else if (secondBall.style.backgroundColor !== rgbText.innerText) {
      answerText.innerText = 'Errou! Tente novamente!';
    }
    scoreBoard();
  });
  
  thirdBall.addEventListener('click', () => {
    if (thirdBall.style.backgroundColor === rgbText.innerText) {
      answerText.innerText = 'Acertou!';
    } else if (thirdBall.style.backgroundColor !== rgbText.innerText) {
      answerText.innerText = 'Errou! Tente novamente!';
    }
    scoreBoard();
  });
  
  fourthBall.addEventListener('click', () => {
    if (fourthBall.style.backgroundColor === rgbText.innerText) {
      answerText.innerText = 'Acertou!';
    } else if (fourthBall.style.backgroundColor !== rgbText.innerText) {
      answerText.innerText = 'Errou! Tente novamente!';
    }
    scoreBoard();
  });
  
  fifthBall.addEventListener('click', () => {
    if (fifthBall.style.backgroundColor === rgbText.innerText) {
      answerText.innerText = 'Acertou!';
    } else if (fifthBall.style.backgroundColor !== rgbText.innerText) {
      answerText.innerText = 'Errou! Tente novamente!';
    }
    scoreBoard();
  });
  
  sixthBall.addEventListener('click', () => {
    if (sixthBall.style.backgroundColor === rgbText.innerText) {
      answerText.innerText = 'Acertou!';
    } else if (sixthBall.style.backgroundColor !== rgbText.innerText) {
      answerText.innerText = 'Errou! Tente novamente!';
    }
    scoreBoard();
  });
  
  window.onload = function () {
    changeColor();
  };
  
  const button = document.getElementById('reset-game');
  button.addEventListener('click', () => {
    changeColor();
    changeRgb();
    answerText.innerHTML = 'Escolha uma cor';
  });
  
  // ballsColor.addEventListener('click', (event) => {
  //   const clicked = event.target;
  //   if (clicked.style.backgroundColor === rgbText.innerText) {
  //     answerText.innerText = 'Acertou!';
  //   } else {
  //     answerText.innerText = 'Errou! Tente novamente!';
  //   }
  // });
  
  let scores = 0;
  const scoreText = document.getElementById('score');
  function scoreBoard() {
    if (answerText.innerText === 'Acertou!') {
     scores += 3;
    scoreText.innerText = `Score:${scores}`;
    console.log(scores);
    }
  }