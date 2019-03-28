// @flow
import React from 'react';
import styles from './FilmRecommendations.css'
import PropTypes from 'prop-types';
import Button from './recomendation_button/Button'
import Arrow from './arrow/Arrow';
import FilmContent from './current_film_content/FilmContent'

export default class FilmRecommendations extends React.Component {
    constructor(props) {
        super(props);
        this.recommendationIndex = 0;
    }

    render() {
        var recommendationIndex = this.recommendationIndex;
        const clickLeft = () => {
            this.recommendationIndex--;
            this.forceUpdate();
        }
        const clickRight = () => {
            this.recommendationIndex++;
            this.forceUpdate();
        }
        const left = require("../../../../img/arrow_left.png");
        const right = require("../../../../img/arrow_right.png");
        var currentRecommendation = undefined;
        if(this.props && this.props.recommendations && this.props.recommendations.length > 0 &&
            this.props.recommendations[0]) {
            const recommendations = this.props.recommendations.map((recommendation) => {
                return <FilmContent recommendation={recommendation}/>
            });
            while (recommendationIndex < 0) {
                recommendationIndex += recommendations.length;
            }
            this.recommendationIndex = recommendationIndex;
            currentRecommendation = recommendations[recommendationIndex % recommendations.length];
        }
        if(currentRecommendation && this.props.recommendations.length === 1) {
            return (
                <div className={styles.content_margin}>
                    <div className={styles.recommendations_with_arrows}>
                        <div className={styles.recommendations}>
                            {currentRecommendation}
                        </div>
                    </div>
                </div>
            );
        }
        if(currentRecommendation) {
            return (
                <div className={styles.content_margin}>
                    <div className={styles.recommendations_with_arrows}>
                        <Arrow img={left} click={clickLeft}/>
                        <div className={styles.recommendations}>
                            {currentRecommendation}
                        </div>
                        <Arrow img={right} click={clickRight}/>
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

FilmRecommendations.defaultProps = {
};

FilmRecommendations.propTypes = {
    recommendations: PropTypes.array,
    onClick: PropTypes.func
};
