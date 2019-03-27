// @flow
import React from 'react';
import styles from './FilmImage.css'
import PropTypes from 'prop-types';

export default class FilmImage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.description} data-tid="cont1ainer">
                <img src={this.props.content}></img>
            </div>
        );
    };
};
FilmImage.defaultProps = {
    content: ''
};

FilmImage.propTypes = {
    content: PropTypes.string
};
