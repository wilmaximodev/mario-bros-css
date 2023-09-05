import React from 'react';
import { useNavigate } from 'react-router';

function GameOver() {

  const navigate = useNavigate();
  return (
    <>
      <label htmlFor="play-again">
        <button id="play-again" onClick={ () => navigate('/play') }>Play Again</button>
      </label>
      <label htmlFor="about">
        <button id="about" onClick={ () => navigate('/about') }>About</button>
      </label>
    </>
  );
}

export default GameOver;