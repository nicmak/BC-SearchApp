import React from 'react';
import './App.css';
import canadianCities from './canadian_cities';

const App = (props) => (
  <div className='App'>
    <label>City Name:</label>
    <CityField />
  </div>
);

const CityField = (props) => (
  <>
    <input
      className='cityField'
    />
  </>
);

export default App;
