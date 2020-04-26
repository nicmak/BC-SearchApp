import React, { useReducer } from 'react';
import styled from 'styled-components';
import CityField from './components/CityField';
import StatusBar from './components/StatusBar';
import { CityContext } from './context/CityContext';
import CitySearchReducer from './reducer/CitySearchReducer';
import Vancouver from './assets/drawing1.png';
import canadianCities from './canadian_cities';

const AppContainer = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 1rem;
  h1 {
    color: #00c1ca;
    font-family: ProximaNovaLtSemibold, arial, sans-serif;
    font-size: 70px;
    letter-spacing: 0.5px;
    font-weight: 400;
  }
`

const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;

const WindowContainer = styled.section`
  width: 80%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: center;
  }
`
const defaultState = {
  cities: canadianCities,
  cityInput: '',
  suggestedCities: [],
  matchResult: false,
  currentIndex: 0,
  selectedCity: '',
  disableMouse: false
}

const App = () => {
  const [ stateFromReducer, dispatch ] = useReducer(CitySearchReducer, defaultState)

  return (
    <CityContext.Provider value={{ stateFromReducer, dispatch }}>
      <AppContainer>
        <ImageWrapper><img src={Vancouver} alt="Vancouver Panaroma" /></ImageWrapper>
        <WindowContainer>
          <CityField />
          <StatusBar />
        </WindowContainer>
      </AppContainer>
    </CityContext.Provider>
  )
}

export default App
