// @flow
import {
  SET_CURRENT_NOTE,
  CHANGE_TEXT,
  ADD_NOTES, SET_CURRENT_FILM, CHANGE_TITLE
} from '../actions/notes';
import type { Action } from './types';
import { reverse, unionWith, orderBy, find, findIndex } from 'lodash';
import { statements } from '@babel/template';

export default function note(state: object = {}, action: Action) {
  switch (action.type) {
    case SET_CURRENT_NOTE:
      var currentNoteIndex = action.index;
      var notes = state.notes;
      var currentNote = Object.assign({}, {}, find(notes, (x) => x.id===currentNoteIndex));
      state = Object.assign({}, state, {currentNote: currentNote, noteIndex: currentNoteIndex});
      return state;
    case SET_CURRENT_FILM:
      var currentFilmIndex = action.index
      var films = state.films;
      var currentFilm = Object.assign({}, {}, find(notes, (x) => x.id===currentFilmIndex));
      state = Object.assign({}, state, {currentNote: currentFilm, noteIndex: currentFilmIndex});
      return state;
    case CHANGE_TEXT:
      var notes = state.notes
      var currentNoteIndex = state.noteIndex
      console.log(currentNoteIndex);
      var index = findIndex(notes, (x) => x.id === currentNoteIndex);
      console.log(index);
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
    default:
      return state;
  }
}
