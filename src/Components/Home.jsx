import React from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  
  const handleClick = (props) => {
    console.log(props);
    navigate(`/${props}`);
  };
  
  return (
    <div className='homepage'>
      <label htmlFor="play-button" name="button-play">
        <button id="play-button" className="btn" onClick={ () => handleClick('play') }>Play</button>
      </label>
      <label htmlFor="about-button" name="button-about">
        <button id="about-button" onClick={ () => handleClick('about') }>About</button>
      </label>
    </div>
  );
}

export default Home;