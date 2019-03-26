// @flow
import React from 'react';
import styles from './FilmContent.css'
import PropTypes from 'prop-types';

export default class FilmContent extends React.Component {
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
FilmContent.defaultProps = {
    content: 'Title of Film',
    onChange: () => {}
};

FilmContent.propTypes = {
    content: PropTypes.string,
    onChange: PropTypes.function
};
