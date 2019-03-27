// @flow
import React from 'react';
import styles from './FilmContent.css'
import { connect } from 'react-redux';
import FilmTitle from "./film_title/FilmTitle";
import FilmImage from "./film_image/FilmImage";
import PropTypes from 'prop-types';
import FilmDescriptoin from './film_description/FilmDescription';
import Button from './recomendation_button/Button'

export default class FilmContent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var text = undefined;
        var title = undefined;
        var image = undefined;
        if(this.props && this.props.recomendation && this.props.recomendation.description) {
            text = this.props.recomendation.description;
        }
        if(this.props && this.props.recomendation && this.props.recomendation.title) {
            title = this.props.recomendation.title;
        }
        
        if(this.props && this.props.recomendation && this.props.recomendation.img) {
            image = this.props.recomendation.img;
        }
        if(title) {
            return (
                <div className={styles.content_margin} >
                <div className={styles.container_text_editor} data-tid="cont1ainer">
                    <FilmTitle content={title}/>
                    <FilmImage content={image} />
                    <FilmDescriptoin content={text}/>
                </div>
                </div>
            );
        } else {
            return (
                <div className={styles.content_margin}>
                    <Button onClick={this.props.onClick}></Button>
                 </div>
            )
        }
    }

};

FilmContent.defaultProps = {
};

FilmContent.propTypes = {
    recommendation: PropTypes.object,
    onClick: PropTypes.func
};
