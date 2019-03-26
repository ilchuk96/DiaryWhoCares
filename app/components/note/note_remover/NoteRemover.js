// @flow
import React from 'react';
import PropTypes from 'prop-types';

import styles from './NoteRemover.css';

export default class NoteRemover extends React.Component {

  render() {

    const { onRemove } = this.props;

    const handleKeyUp = () => {
      console.log(content);
    };

    var style = styles.remover;

    return (
      <div className={style} onClick={onRemove} onKeyUp={handleKeyUp} role="presentation">
        <p> X </p>
      </div>
    );
  }
};

NoteRemover.propTypes = {
    onRemove: PropTypes.function
};