// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import note from './notes';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    note
  });
}
