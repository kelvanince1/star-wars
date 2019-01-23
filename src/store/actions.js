import * as actionTypes from './actionTypes';

export const fetchCharacters = () => async dispatch => {
  const res = await
  fetch('https://swapi.co/api/people/');
  const response = await res.json();

  dispatch({ type: actionTypes.FETCH_ALL_CHARACTERS, payload: response.results })
}
