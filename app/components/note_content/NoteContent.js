// @flow
import React from 'react';
import styles from './NoteContent.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeText, changeTitle, addNotes } from '../../actions/notes';
import NoteText from './note_text/NoteText';
import NoteTitle from './note_title/NoteTitle';
import axios from 'axios';


const recomendationURI = 'http://172.31.2.213:80/recomendation';

class NoteContent extends React.Component {

  constructor(props) {
    super(props);
  }

  getRecomendation(note) {
    var self = this;
    axios.get(recomendationURI).then((response) => {
        var recomendation = response.data;
        console.log(recomendation);
        note.recommendation = {
          title: recomendation.title,
          img: recomendation.img,
          description: recomendation.description
        };
        console.log(note);
        self.props.addNotes([note]);
      }
    ).catch((e) => {
        console.log(e);
      }
    );
  }

  render() {

    const changeContent = (e) => {
      this.getRecomendation(this.props.currentNote);
      this.props.changeText(this.props.currentNote, e.target.value);
    };

    const changeTitle = (e) => {
      this.props.changeTitle(this.props.currentNote, e.target.value);
    };

    var text = '';
    var title = '';
    if(this.props && this.props.currentNote && this.props.currentNote.content) {
      text = this.props.currentNote.content;
    }
    if(this.props && this.props.currentNote && this.props.currentNote.title) {
        title = this.props.currentNote.title;
    }
    return (
      <div className={styles.container_text_editor} data-tid="cont1ainer">
        <NoteTitle content={title} changeTitle={changeTitle.bind(this)}/>
        <NoteText content={text} changeText={changeContent.bind(this)}/>
      </div>
    );
  }

};

const mapStateToProps = (state) => {
  return {
    currentNote: state.note.currentNote
  }
}
const mapDispatchToProps = (dispatch) => ({
  changeText: bindActionCreators(changeText, dispatch),
  changeTitle: bindActionCreators(changeTitle, dispatch),
  addNotes: bindActionCreators(addNotes, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteContent);