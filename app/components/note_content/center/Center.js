// @flow
import React from 'react';
import styles from './Center.css'
import PropTypes from 'prop-types';

export default class Center extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const centerImage = require("../../../../img/diary.png");
    return (
      <div className={styles.center} data-tid="cont1ainer">
        <img src={centerImage}></img>
      </div>
    );
  };
};

