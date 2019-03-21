import type { Dispatch } from '../reducers/types';

export const SET_CURRENT_NOTE = 'SET_CURRENT_NOTE';
export const GET_CURRENT_NOTE = 'GET_CURRENT_NOTE';
export const CHANGE_TEXT = 'CHANGE_TEXT';
export const INIT_NOTES = 'INIT_NOTES';
export const GET_ALL_NOTES = 'GET_ALL_NOTES';

export function setCurrentNote(index) {
    return (dispatch: Dispatch) => {
      dispatch( {
        type: SET_CURRENT_NOTE,
        index
      });
    }
}


export function getCurrentNote(note) {
  return (dispatch: Dispatch) => {
    dispatch( {
      type: GET_CURRENT_NOTE
    });
  }
}

export function initNotes(notes) {
  return (dispatch: Dispatch) => {
    dispatch( {
      type: INIT_NOTES,
      notes
    });
  }
}

export function getAllNotes() {
  return (dispatch: Dispatch) => {
    dispatch( {
      type: GET_ALL_NOTES
    });
  }
}


export function changeText(text) {
  return (dispatch: Dispatch) => {
    dispatch({
        type: CHANGE_TEXT,
        text
      });
  };
}