// @flow
import React from 'react';
import styles from './FilmDescription.css'
import PropTypes from 'prop-types';

export default class FilmDescriptoin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.description} data-tid="cont1ainer">
                <textarea value={this.props.content} readonly></textarea>
            </div>
        );
    };
};
FilmDescriptoin.defaultProps = {
    content: ''
};

FilmDescriptoin.propTypes = {
    content: PropTypes.string
};
