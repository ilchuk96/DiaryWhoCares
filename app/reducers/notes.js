// @flow
import { SET_CURRENT_NOTE,
        CHANGE_TEXT,
        ADD_NOTES, REMOVE_NOTE } from '../actions/notes';
import type { Action } from './types';
import { filter, reverse, unionWith, orderBy, find, findIndex } from 'lodash';
import { statements } from '@babel/template';
import { routerActions } from 'connected-react-router';

export default function note(state: object = {}, action: Action) {
  switch (action.type) {
    case SET_CURRENT_NOTE:
      var currentNoteIndex = action.index;
      var notes = state.notes;
      var currentNote = Object.assign({}, {}, find(notes, (x) => x.id===currentNoteIndex));
      state = Object.assign({}, state, {currentNote: currentNote, noteIndex: currentNoteIndex});
      return state;
    case CHANGE_TEXT:
      var notes = state.notes
      var currentNoteIndex = state.noteIndex
      var index = findIndex(notes, (x) => x.id === currentNoteIndex);
      notes[index].content = action.text;
      notes = Object.assign([], [], notes);
      var currentNote = Object.assign({}, {}, notes[index]);
      state = Object.assign({}, state, {currentNote: currentNote, notes: notes});
      return state;
    case ADD_NOTES:
      var notes = action.notes;
      var prev_notes = state.notes ? state.notes : [];
      notes = unionWith(notes, prev_notes, (x, y) => x.id == y.id);
      notes = reverse(orderBy(notes, ['time']));
      state = Object.assign({}, state, {notes: notes});
      return state;
    case REMOVE_NOTE:
      var notes = state.notes;
      var newNotes = filter(notes, (n) => {return n.id !== action.noteIndex});
      notes = Object.assign([], [], newNotes);
      if (state.notes && 
        state.notes.currentNote && 
        state.notes.currentNote.id === action.noteIndex) {
          state.notes.currentNote = undefined;
          state.notes.currentNoteIndex = undefined;
        }
      state = Object.assign({}, state, {notes:notes});
      return state;
    default:
      return state;
  }
}
