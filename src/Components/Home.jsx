import React from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  
  const handleClick = (props) => {
    console.log(props);
    navigate(`/${props}`);
  };
  
  return (
    <>
      <label htmlFor="about-button" name="button-about">
        <button id="about-button" onClick={ () => handleClick('about') }>About</button>
      </label>
      <label htmlFor="play-button" name="button-play">
        <button id="play-button" onClick={ () => handleClick('play') }>Play</button>
      </label>
    </>
  );
}

export default Home;