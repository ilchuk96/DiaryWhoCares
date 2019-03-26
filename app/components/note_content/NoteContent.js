// @flow
import React from 'react';
import styles from './NoteContent.css'
import { connect } from 'react-redux';
import store from '../../reducers/index';
import { bindActionCreators } from 'redux';
import { changeText } from '../../actions/notes';

class ListOfNotes extends React.Component {

  constructor(props) {
    super(props);
    this.content = "";
  }

  render() {

    const changeContent = (e) => {
      this.props.changeText(this.props.currentNote, e.target.value);
    };

    var content = "";
    if(this.props && this.props.currentNote && this.props.currentNote.content) {
      content = this.props.currentNote.content;
    }
    return (
      <div className={styles.container_text_editor} data-tid="cont1ainer">
        <textarea value={content} onChange={changeContent}></textarea>
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
  changeText: bindActionCreators(changeText, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ListOfNotes);