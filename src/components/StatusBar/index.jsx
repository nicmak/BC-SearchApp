import React, { useContext, useMemo, useRef, useEffect } from 'react';
import { CityContext } from '../../context/CityContext';
import { StatusBarContainer } from './styles';

const StatusBar = () => {

  const { stateFromReducer } = useContext(CityContext);
  const { cityInput, suggestedCities, matchResult } = stateFromReducer;
  const statusBarRef = useRef();


  const smoothScrollIntoView = () => {
    window.scrollTo({
      top: statusBarRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  const checkVisibility = () => {
    const rect = statusBarRef.current.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }

  useEffect(() => {
    if(!checkVisibility()) {
      smoothScrollIntoView()
    }
  }, [cityInput, suggestedCities ])

  const statusLogic = useMemo(() => {
    let updatedStatus = ''
    if (!cityInput) {
      updatedStatus = 'Status: empty'
    }
    if (cityInput) {
      const cityLength = suggestedCities && suggestedCities.length;
      updatedStatus = (
      <div>
        <p>Status: In Progress</p>
        <p>Input: {cityInput}</p>
        <p >Results: {cityLength}</p>
      </div>
      )
      if (matchResult) {
        updatedStatus = 'Status: Valid'
      }
    }
    return updatedStatus
  }, [cityInput, matchResult, suggestedCities])

  return (
    <StatusBarContainer

      matchResult={matchResult}
      cityInput={cityInput}
    >
      {statusLogic}
      <div ref={statusBarRef} />
    </StatusBarContainer>
  )
}

export default StatusBar;