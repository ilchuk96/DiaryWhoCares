// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from '../../reducers/index';
import { bindActionCreators } from 'redux';
import { setCurrentNote, removeNote } from '../../actions/notes';

import styles from './Note.css';
import NoteRemover from './note_remover/NoteRemover';

class Note extends React.Component {

  render() {

    const { title, classes, content, store, index, currentNoteIndex} = this.props;

    const onClick = (e) => {
      e.preventDefault();
      this.props.chooseNote(index);
    };

    var titleInner = title;

    const handleKeyUp = () => {
      console.log(content);
    };

    const removeNote = () => {
      this.props.removeNote(index);
    };

    var style = styles.note;
    var textStyle = styles.title;
    var backgroundColor = undefined;

    if(index == currentNoteIndex) {
      style = styles.choosen_note;
      backgroundColor = "#FFF7D0";
    }
    if(titleInner && titleInner.length > 12) {
      titleInner = titleInner.substring(0, 12) + "..."
    }

    return (
      <div style={{backgroundColor: backgroundColor}} className={style} onClick={onClick} onKeyUp={handleKeyUp} role="presentation">
        <p className={textStyle}> {titleInner} </p>
        <NoteRemover onRemove={removeNote} />
      </div>
    );
  }
};

Note.defaultProps = {
    title: 'title',
    classes: '',
    content: 'content'
};

Note.propTypes = {
    title: PropTypes.string,
    classes: PropTypes.string,
    content: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    currentNoteIndex: state.note.noteIndex
  }
}

const mapDispatchToProps = (dispatch) => ({
  chooseNote: bindActionCreators(setCurrentNote, dispatch),
  removeNote: bindActionCreators(removeNote, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Note);