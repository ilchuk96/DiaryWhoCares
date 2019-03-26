// @flow
import React from 'react';
import styles from './FilmContent.css'
import { connect } from 'react-redux';
import FilmTitle from "./film_title/FilmTitle";
import PropTypes from 'prop-types';

export default class FilmContent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var text = '';
        var title = '';
        if(this.props && this.props.recomendation && this.props.recomendation.content) {
            text = this.props.recomendation.content;
        }
        if(this.props && this.props.recomendation && this.props.recomendation.title) {
            title = this.props.recomendation.title;
        }
        return (
            <div className={styles.container_text_editor} data-tid="cont1ainer">
                <FilmTitle content={title}/>
            </div>
        );
    }

};

FilmContent.defaultProps = {
    recomendation: {
        title: '',
        img: undefined,
        description: ''
    }

};

FilmContent.propTypes = {
    recommendation: PropTypes.object
};
