import React, { useEffect } from 'react';
import '../App.css';
import Mario from '../img/mario.gif';
import Pipe from '../img/pipe.png';
import GameOver from '../img/mario-die.gif';
import Clouds from '../img/clouds.png';
import { useNavigate } from 'react-router-dom';

function Play() {
  const navigate = useNavigate();

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

  const loop = setInterval(() => {
    const pipe = document.querySelector('.pipe');
    const mario = document.querySelector('.mario');
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120  && pipePosition > 0 && marioPosition < 80) {
      pipe.style.animation = 'none';
      pipe.style.left = `${pipePosition}px`;

      mario.style.animation = 'none';
      mario.style.bottom = `${marioPosition}px`;

      mario.src = GameOver;
      mario.style.width = '75px';
      mario.style.marginLeft = '50px';

      setTimeout(() => {
        navigate('/over');
      }, 2000);

      clearInterval(loop);
    } 
  }, 10);

  return (
    <div className='running'>
      <img className='clouds' src={ Clouds } alt="clouds" />
      <img className='pipe' src={ Pipe } alt="pipeImg" />
      <img className='mario' src={ Mario } alt='Mario' />
    </div>
  );
}

export default Play;