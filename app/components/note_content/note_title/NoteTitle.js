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
        <textarea value={this.props.content} onChange={this.props.onChange}></textarea>
      </div>
    );
  };
};
NoteTitle.defaultProps = {
  content: '',
  onChange: () => {}
};

NoteTitle.propTypes = {
    content: PropTypes.string,
    onChange: PropTypes.function
};

