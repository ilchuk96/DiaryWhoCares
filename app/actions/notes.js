import type { Dispatch } from '../reducers/types';
import path from 'path';
import fs, { mkdir } from 'fs';
import electron from 'electron'
import v1 from 'uuid';
import { deleteFile } from 'fs-extra-p';

export const SET_CURRENT_NOTE = 'SET_CURRENT_NOTE';
export const SET_CURRENT_FILM = 'SET_CURRENT_FILM';
export const CHANGE_TEXT = 'CHANGE_TEXT';
export const INIT_NOTES = 'INIT_NOTES';
export const ADD_NOTES = 'ADD_NOTES';
export const ADD_NEW_NOTE = 'ADD_NEW_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';



const userDataPath = path.join((electron.app || electron.remote.app).getPath('userData'), 'diarywhocares');
if (!fs.existsSync(userDataPath)){
  fs.mkdir(userDataPath, (err)=> {console.log(err)});
}

function buildNewNote() {
  return {
    title: new Date().toLocaleDateString(),
    content: '',
    time: new Date().toISOString(),
    id: v1()
  }
}

function saveNote(note) {
  const app = (electron.app || electron.remote.app);
  const notePath = path.join(userDataPath, note.id + '.json');
  fs.writeFileSync(notePath, JSON.stringify(note));
}

function deleteNote(noteIndex) {
  const app = (electron.app || electron.remote.app);
  const notePath = path.join(userDataPath, noteIndex + '.json');
  fs.unlink(notePath, (e)=> {console.log(e)});
}

export function setCurrentNote(index) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SET_CURRENT_NOTE,
      index
    });
  }
}

// export function setCurrentFilm(index) {
//   return (dispatch: Dispatch) => {
//     dispatch({
//       type: SET_CURRENT_FILM,
//       index
//     });
//   }
// }

export function loadNotes(pageNumber, pageSize) {
  const app = (electron.app || electron.remote.app);
  var notes = [];
  const result = fs.readdirSync(userDataPath);
  result.forEach(element => {
    const file = fs.readFileSync(path.join(userDataPath, element));
    notes.unshift(JSON.parse(file));
  });
  return (dispatch: Dispatch) => {
    dispatch({
      type: ADD_NOTES,
      notes
    });
  }
}

export function loadFilm(pageNumber, pageSize) {
  const app = (electron.app || electron.remote.app);
  var notes = [];
  const result = fs.readdirSync(userDataPath);
  result.forEach(element => {
    const file = fs.readFileSync(path.join(userDataPath, element));
    notes.unshift(JSON.parse(file));
  });
  return (dispatch: Dispatch) => {
    dispatch({
      type: ADD_NOTES,
      notes
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
  const app = (electron.app || electron.remote.app);
  var note = buildNewNote();
  saveNote(note);
  return (dispatch: Dispatch) => {
    dispatch({
      type: ADD_NOTES,
      notes: [ note ]
    });
    dispatch({
      type: SET_CURRENT_NOTE,
      index: note.id
    });
  }
}

export function changeTitle(note, title) {
  note.title = title;
  saveNote(note);
  return (dispatch: Dispatch) => {
    dispatch({
      type: ADD_NOTES,
      notes: [ note ]
    });
    dispatch({
      type: SET_CURRENT_NOTE,
      index: note.id
    });
  };
}

export function changeText(note, text) {
  var newNote = note;
  newNote.content = text;
  newNote.recommendation = undefined;
  saveNote(newNote);
  return (dispatch: Dispatch) => {
    dispatch({
      type: CHANGE_TEXT,
      text
    });
  };
}

export function removeNote(noteIndex) {
  deleteNote(noteIndex);
  return (dispatch: Dispatch) => {
    dispatch({
      type: REMOVE_NOTE,
      noteIndex
    });
  };
}