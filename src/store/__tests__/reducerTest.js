import * as actionTypes from '../actionTypes';
import reducer from '../reducers';

it('Handles actions for retrieving a character', () => {
  const action = {
    type: actionTypes.FETCH_CHARACTER,
    payload: { name: 'Luke Skywalker', film: 'A New Hope' },
  }

  const updatedState = reducer([], action);

  expect(updatedState).toEqual({
    "characters": {"film": "A New Hope", "name": "Luke Skywalker"}, "error": false
  });
})
