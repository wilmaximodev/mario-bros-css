import React, { useState, useEffect } from 'react';
import '../App.css';

function Play() {
  const [playing, setPlaying] = useState(false);

  const jump = () => {
    const mario = document.querySelector('.mario');
    mario.classList.add('jump');
    setTimeout(() => {
      mario.classList.remove('jump');
    }, 500);
  };

  useEffect(() => {
    window.addEventListener('keydown', jump);
  });

  const runningGame = (
    <div className='running'>
      <img className='pipe' src='https://luizfelipe9627-super-mario.netlify.app/assets/image/pipe-game.png' alt="pipeImg" />
      <img className='mario' src='https://i.pinimg.com/originals/3c/f4/42/3cf442eb0574a06127a2db3a6bd6e633.gif' alt='Mario' />
    </div>
  );

  const notRunningGame = (
    <>
      <label htmlFor="init-game">
        <button id="init-game" onClick={ () => setPlaying(true) }>Play Game Now!</button>
      </label>
      <label htmlFor="exit-game">
        <button id="exit-game">Exit!</button>
      </label>
    </>
  );

  return (
    <>
      {
        !playing ? notRunningGame : runningGame
      }
    </>
  );
}

export default Play;