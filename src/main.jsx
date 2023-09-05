import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';

const rootContainer = document.getElementById('root');

const root = createRoot(rootContainer);


root.render(
  <Router>
    <App tab="home" />
  </Router>
);
