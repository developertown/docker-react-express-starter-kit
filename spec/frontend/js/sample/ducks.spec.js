import reducer, { actions } from 'js/sample/ducks'
import deepFreeze from 'deep-freeze'

describe('sample redux reducer', () => {
  it('has a default state', () => {
    let newState = reducer(undefined, {});
    expect(newState).toEqual({count: 0});
  });

  it('increments the count when button is clicked', () => {
    let oldState = {count: 5};
    deepFreeze(oldState);
    expect(reducer(oldState, actions.buttonClicked())).toEqual({count: 6});
  });
});
