// @flow
import React from 'react';
import styles from './Home.css';
import ListOfNotes from './notes_list/ListOfNotes'
import NoteContent from './note_content/NoteContent'
import Film from './film/Film'

export default class Note extends React.Component {

  render() {
    return (
      <div className={styles.home}>
        <div className={styles.container_notes} data-tid="cont1ainer">
          <ListOfNotes changeContent = {(s)=> {console.log(s)}} />
        </div>
        <div className={styles.note_container_area} data-tid="cont1ainer">
          <NoteContent id='note_content'/>
        </div>
    );
  }
}
