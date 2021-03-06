// @flow
import React from 'react';
import styles from './FilmContent.css'
import { connect } from 'react-redux';
import FilmTitle from "../film_title/FilmTitle";
import FilmImage from "../film_image/FilmImage";
import PropTypes from 'prop-types';
import FilmDescriptoin from '../film_description/FilmDescription';

export default class FilmContent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var text = undefined;
        var title = undefined;
        var image = undefined;
        if(this.props && this.props.recommendation && this.props.recommendation.description) {
            text = this.props.recommendation.description;
        }
        if(this.props && this.props.recommendation && this.props.recommendation.title) {
            title = this.props.recommendation.title;
        }
        
        if(this.props && this.props.recommendation && this.props.recommendation.img) {
            image = this.props.recommendation.img;
        }
        if(title) {
            return (
                <div className={styles.container_text_editor} data-tid="cont1ainer">
                    <FilmTitle content={title}/>
                    <FilmImage content={image} />
                    <FilmDescriptoin content={text}/>
                </div>
            );
        }
    }

};

FilmContent.defaultProps = {
};

FilmContent.propTypes = {
    recommendation: PropTypes.object,
    onClick: PropTypes.func
};
