import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchCharacters = url => async dispatch => {
  try {
    const response = await axios
        .get(`${url}`)
        .then(res => res.data)

    dispatch({ type: actionTypes.FETCH_CHARACTER, payload: response });
  } catch(err) {
      dispatch({ type: actionTypes.FETCH_CHARACTER_FAILED, message: err.message
    });
  }
}

export const fetchMovies = id => async dispatch => {
  const response = await
  axios.get(`https://swapi.co/api/films/${id}`)
  .then(res => res.data)

  dispatch({ type: actionTypes.FETCH_ALL_MOVIES, payload: response })
}
