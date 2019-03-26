import type { Dispatch } from '../reducers/types';
import axios from 'axios';

export const SET_CURRENT_NOTE = 'SET_CURRENT_NOTE';
export const CHANGE_TEXT = 'CHANGE_TEXT';
export const INIT_NOTES = 'INIT_NOTES';
export const ADD_NOTES = 'ADD_NOTES';
export const ADD_NEW_NOTE = 'ADD_NEW_NOTE';

export function setCurrentNote(index) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SET_CURRENT_NOTE,
      index
    });
  }
}

export function loadNotes(pageNumber, pageSize) {
  return (dispatch: Dispatch) => {
    axios.get(
      `http://crypto-diary.com/events?pageSize=${pageSize};pageNumber=${pageNumber}`
    ).then(response => {
      dispatch({
        type: ADD_NOTES,
        notes: response.data
      });
    });
  }
}

export function addNotes(notes) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ADD_NOTES,
      notes
    });
  }
}

export function newNote() {
  return (dispatch: Dispatch) => {
    axios.get(
      `http://crypto-diary.com/newNote`
    ).then(response => {
      dispatch({
        type: ADD_NOTES,
        notes: [ response.data ]
      });
      dispatch({
        type: SET_CURRENT_NOTE,
        index: response.data.id
      });
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