export const SUGGESTED_CITIES = 'SUGGESTED_CITIES';
export const INPUT_TEXT = 'INPUT_TEXT';
export const MATCH_RESULT = 'MATCH_RESULT';
export const CURRENT_INDEX = 'CURRENT_INDEX';
export const SELECTED_CITY = 'SELECTED_CITY';

const CitySearchReducer = (state, action) => {
  switch(action.type) {
    case SUGGESTED_CITIES:
      return {
        ...state,
        suggestedCities: action.suggestedCities
      }
    case INPUT_TEXT:
      return {
        ...state,
        cityInput: action.text
      }
    case CURRENT_INDEX:
      return {
        ...state,
        currentIndex: action.currentIndex
      }
    case SELECTED_CITY:
        return {
          ...state,
          selectedCity: action.city
        }
    case MATCH_RESULT:
      return {
        ...state,
        matchResult: action.result
      }
    default:
      return state;
  }
}

export default CitySearchReducer;