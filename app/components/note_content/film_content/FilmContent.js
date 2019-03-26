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

        const changeContent = (e) => {
            this.props.changeText(this.props.currentFilm, e.target.value);
        };

        const changeTitle = (e) => {
            this.props.changeTitle(this.props.currentFilm, e.target.value);
        };

        var text = '';
        var title = '';
        if(this.props && this.props.currentFilm && this.props.currentFilm.content) {
            text = this.props.currentFilm.content;
        }
        if(this.props && this.props.currentFilm && this.props.currentFilm.title) {
            title = this.props.currentFilm.title;
        }
        return (
            <div className={styles.container_text_editor} data-tid="cont1ainer">
                <FilmTitle content={title} onChange={changeTitle.bind(this)}/>
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
