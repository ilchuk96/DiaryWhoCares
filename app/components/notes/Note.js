// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from '../../reducers/index';
import { bindActionCreators } from 'redux';
import { setCurrentNote } from '../../actions/notes';

import styles from './Note.css';

class Note extends React.Component {

  render() {

    const { title, classes, content, store, index } = this.props;

    const onClick = (e) => {
      e.preventDefault();
      this.props.chooseNote(index);
    };

    const handleKeyUp = () => {
      console.log(content);
    };


    return (
      <div className={styles.note} onClick={onClick} onKeyUp={handleKeyUp} role="presentation">
        <p className={classes}> {title} </p>
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
    currentNoteIndex: state.note.currentNoteIndex
  }
}

const mapDispatchToProps = (dispatch) => ({
  chooseNote: bindActionCreators(setCurrentNote, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Note);