import * as actionTypes from './actionTypes';

const initialState = {
  characters: [],
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_ALL_CHARACTERS:
      return {
        ...state,
         characters: action.payload,
      }
    default:
      return state;
  }
}

export default reducer;
