import React, { useState, useEffect, useContext, useCallback, useRef } from 'react';
import debounce from 'lodash.debounce';
import { CityContext } from '../../context/CityContext';
import {
  SUGGESTED_CITIES,
  INPUT_TEXT,
  MATCH_RESULT,
  CURRENT_INDEX,
  SELECTED_CITY
} from '../../reducer/CitySearchReducer';

import {
  CityFieldContainer,
  InputContainer,
  SuggestedContainer,
  SuggestedList,
  SuggestedListItems
} from './styles';

const CityField = () => {
  const { stateFromReducer, dispatch } = useContext(CityContext)
  const {
    cities,
    cityInput,
    currentIndex,
    suggestedCities
  } = stateFromReducer;

  const inputRef = useRef(null);
  const [ disableMouse, setMouseDisable ] = useState(false);
  const detectMouse = useCallback(() => setMouseDisable(false), [setMouseDisable])

  useEffect(() => {
    document.addEventListener('mousemove',debounce(detectMouse, 10))
    return () => document.removeEventListener('mousemove', detectMouse)
  }, [detectMouse])

  useEffect(() => {
    handleSearch();
    checkIfMatchBySuggestions();
  }, [cityInput])

  const handleSearch = () => {
    if (cityInput && cityInput.length >= 2) {
      const clonedList = [...cities];
      const regex = new RegExp(`^${cityInput}`, 'i')
      const suggested = clonedList.sort().filter(city => regex.test(city))
      dispatch({ type: SUGGESTED_CITIES, suggestedCities: suggested })
    } else {
      dispatch({ type: SUGGESTED_CITIES, suggestedCities: [] })
      dispatch({ type: SELECTED_CITY, city: '' })
      dispatch({ type: MATCH_RESULT, result: false })
    }
  }

  const checkIfMatchByOriginalList = (value) => {
    const clonedList = [...cities];
    let matchedCity = ''
    const result = clonedList.some((city) => {
      if (city.toLowerCase() === value.toLowerCase()) {
        matchedCity = city;
        return true;
      }
      return false
    })
    if (result) {
      dispatch({ type: MATCH_RESULT, result: result })
      dispatch({ type: SELECTED_CITY, city: matchedCity })
    }
  }

  const checkIfMatchBySuggestions = () => {
    if (suggestedCities && suggestedCities.length > 0) {
      let matchedCity = ''
      const result = suggestedCities.some((city) => {
        if (city.toLowerCase() === cityInput.toLowerCase()) {
          matchedCity = city;
          return true;
        }
        return false
      })
      dispatch({ type: MATCH_RESULT, result: result })
      dispatch({ type: SELECTED_CITY, city: matchedCity  })
      if (matchedCity) {
        dispatch({ type: SUGGESTED_CITIES, suggestedCities: [] })
      }
    }
    if (suggestedCities && suggestedCities.length === 0) {
      checkIfMatchByOriginalList(cityInput)
    }
  }

  const handleCityFieldInput = (e) => {
    dispatch({ type: INPUT_TEXT, text: e.target.value })
    dispatch({ type: CURRENT_INDEX, currentIndex: 0 })
  }

  const selectCity = (city) => {
    dispatch({ type: INPUT_TEXT, text: city })
    inputRef.current.focus();
  }

  const selectCurrentIndex = (index) => {
    if (currentIndex !== index) {
      dispatch({ type: CURRENT_INDEX, currentIndex: index })
    }
  }

  const upDownArrowEvent = (direction) => {
    setMouseDisable(true)
    let index = currentIndex;
    if (direction === 'down') {
      index = index + 1;
    }
    if (direction === 'up') {
      index = index - 1;
    }
    dispatch({ type: CURRENT_INDEX, currentIndex: index })
  }

  const keyDownEvents = (e) => {
    if (e && e.keyCode === 40 && currentIndex < suggestedCities.length - 1) {
      upDownArrowEvent('down')
    }
    if (e && e.keyCode === 38 && currentIndex > 0) {
      e.preventDefault()
      upDownArrowEvent('up')
    }
    if (e && e.keyCode === 13 && suggestedCities.length > 0) {
      dispatch({ type: INPUT_TEXT, text: suggestedCities[currentIndex] })
    }
  }

  const Suggested = () => {
    const suggested = suggestedCities.map((city, index) => {
      return (
      <SuggestedListItems
        key={index}
        isActive={currentIndex === index}
        onClick={() => selectCity(city)}
        onMouseOver={() => selectCurrentIndex(index)}
      >
        {city}
      </SuggestedListItems>
      )
    })
    return (
      <SuggestedList role="listbox" disableMouse={disableMouse}>
        {suggested}
      </SuggestedList>
    )
  }


  return (
    <React.Fragment>
      <CityFieldContainer
        data-testid="input"
      >
        <InputContainer
          ref={inputRef}
          placeholder="Explore British Columbia or Ontario..."
          value={cityInput}
          onKeyDown={(e) => keyDownEvents(e)}
          onChange={(e) => handleCityFieldInput(e)}
        />
        <SuggestedContainer>{suggestedCities && suggestedCities.length > 0 && <Suggested />}</SuggestedContainer>
      </CityFieldContainer>
    </React.Fragment>
  );
}

export default CityField;