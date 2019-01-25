import * as actionTypes from './actionTypes';

export const fetchCharacters = url => async dispatch => {
  const res = await
  fetch(`${url}`);
  const response = await res.json();

  dispatch({ type: actionTypes.FETCH_CHARACTER, payload: response })
}

export const fetchMovies = () => async dispatch => {
  const res = await
  fetch('https://swapi.co/api/films/');
  const response = await res.json();

  dispatch({ type: actionTypes.FETCH_ALL_MOVIES, payload: response })
}
