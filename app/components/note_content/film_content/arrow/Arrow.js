// @flow
import React from 'react';
import styles from './Arrow.css'
import PropTypes from 'prop-types';

export default class Arrow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.arrow} data-tid="cont1ainer">
                <img src={this.props.img} onClick={this.props.click}></img>
            </div>
        );
    };
};
Arrow.defaultProps = {
};

Arrow.propTypes = {
    img: PropTypes.object,
    click: PropTypes.func
};
