import React from 'react';
import { useNavigate } from 'react-router';

function About() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Sobre o mini jogo</h1>;
      <label htmlFor="home">
        <button id="home" onClick={ () => navigate('/') }>Home</button>
      </label>
    </>
  );
}

export default About;
