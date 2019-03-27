// @flow
import React from 'react';
import styles from './Button.css'
import PropTypes from 'prop-types';

export default class FilmTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.button_container}>
            <div className={styles.button} onClick={this.props.onClick} data-tid="cont1ainer">
                <p>Get recommendation</p>
            </div>
            </div>
        );
    };
};
FilmTitle.propTypes = {
    onClick: PropTypes.func
};
