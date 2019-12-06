import React from 'react';
import './App.css';
import canadianCities from './canadian_cities';

const App = (props) => (
  <div className='App'>
    <Window />
    <Bottom status='status' />
  </div>
);

const Window = () => (
  <div data-testid='Window'>
    <label>City Name:</label>
    <cityField />
  </div>
);

const cityField = () => (
  <div data-testid='Input'>
    <input
      className='input'
    />
  </div>
);

const Bottom = (status) => (
  <div data-testid='Bottom' className='Bottom'>
    <span>status: {status}</span>
  </div>
)

export default App
