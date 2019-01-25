import * as actionTypes from './actionTypes';

const initialState = {
  characters: [],
  films: [],
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_CHARACTER:
      return {
        ...state,
         characters: action.payload,
      }
    case actionTypes.FETCH_ALL_MOVIES:
      return {
        ...state,
         films: action.payload,
      }
    default:
      return state;
  }
}

export default reducer;
