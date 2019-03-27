// @flow
import React from 'react';
import styles from './NoteTitle.css'
import PropTypes from 'prop-types';

export default class NoteTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.title} data-tid="cont1ainer">
        <input value={this.props.content} onChange={this.props.changeTitle}></input>
      </div>
    );
  };
};
NoteTitle.defaultProps = {
  content: ''
};

NoteTitle.propTypes = {
    content: PropTypes.string,
    changeTitle: PropTypes.function
};

