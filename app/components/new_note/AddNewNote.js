// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from '../../reducers/index';
import { bindActionCreators } from 'redux';
import { newNote } from '../../actions/notes';

import styles from './AddNewNote.css';

class AddNewNote extends React.Component {

  render() {

    const { title, classes, content, store, index, currentNoteIndex} = this.props;

    const onClick = (e) => {
      e.preventDefault();
      this.props.newNote(index);
    };

    const handleKeyUp = () => {
      console.log(content);
    };

    var style = styles.note;
    if(index == currentNoteIndex) {
      style = styles.choosen_note;
    }

    return (
      <div className={style} onClick={onClick} onKeyUp={handleKeyUp} role="presentation">
        <p className={classes}> {title} </p>
      </div>
    );
  }
};

AddNewNote.defaultProps = {
    title: 'New note',
    classes: '',
    content: ''
};

AddNewNote.propTypes = {
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
  newNote: bindActionCreators(newNote, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewNote);