import * as actionTypes from './actionTypes';

export const fetchCharacters = url => async dispatch => {
  const res = await
  fetch(`${url}`);
  const response = await res.json();

  dispatch({ type: actionTypes.FETCH_ALL_CHARACTERS, payload: response })
}
