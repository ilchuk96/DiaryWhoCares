// @flow
import React from 'react';
import styles from './NoteText.css';
import PropTypes from 'prop-types';

export default class NoteText extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container_text_editor} data-tid="cont1ainer">
        <textarea value={this.props.content} onChange={this.props.changeText}></textarea>
      </div>
    );
  };
};
NoteText.defaultProps = {
  content: ''
};

NoteText.propTypes = {
    content: PropTypes.string,
    changeText: PropTypes.function
};

