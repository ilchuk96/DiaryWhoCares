// @flow
import React from 'react';
import styles from './FilmTitle.css'
import PropTypes from 'prop-types';

export default class FilmTitle extends React.Component {
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
FilmTitle.defaultProps = {
    content: ''
};

FilmTitle.propTypes = {
    content: PropTypes.string,
    changeTitle: PropTypes.function
};