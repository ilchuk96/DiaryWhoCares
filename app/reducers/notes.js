// @flow
import { GET_ALL_NOTES,
        SET_CURRENT_NOTE,
        GET_CURRENT_NOTE,
        CHANGE_TEXT,
        INIT_NOTES } from '../actions/notes';
import type { Action } from './types';

export default function note(state: object = {}, action: Action) {
  switch (action.type) {
    case SET_CURRENT_NOTE:
      var currentNoteIndex = action.index
      var notes = state.notes;
      var currentNote = Object.assign({}, {}, notes[currentNoteIndex]);
      state = Object.assign({}, state, {currentNote: currentNote, noteIndex: currentNoteIndex});
      return state;
    case CHANGE_TEXT:
      var notes = state.notes
      var currentNoteIndex = state.noteIndex
      notes[currentNoteIndex].content = action.text;
      notes = Object.assign([], [], notes);
      var currentNote = Object.assign({}, {}, notes[currentNoteIndex]);
      state = Object.assign({}, state, {currentNote: currentNote, notes: notes});
      return state;
    case INIT_NOTES:
      notes = action.notes;
      state = Object.assign({}, state, {notes: notes});
      return state;
    default:
      return state;
  }
}
