// @flow
import React from 'react';
import styles from './NoteContent.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeText, changeTitle } from '../../actions/notes';
import NoteText from './note_text/NoteText';
import NoteTitle from './note_title/NoteTitle';

class NoteContent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const changeContent = (e) => {
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
  changeTitle: bindActionCreators(changeTitle, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteContent);