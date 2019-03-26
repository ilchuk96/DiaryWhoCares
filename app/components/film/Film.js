// import React from "react";
// import {setCurrentNote} from "../../actions/notes";
// import { bindActionCreators } from 'redux';
// import { setCurrentFilm } from '../../actions/notes';
// import styles from "../note/Note.css";
//
// class Film extends React.Component {
//
//     render() {
//
//         const {title, classes, content, store, index, currentFilmIndex} = this.props;
//
//         const onClick = (e) => {
//             e.preventDefault();
//             this.props.chooseFilm(index);
//         };
//
//         const handleKeyUp = () => {
//             console.log(content);
//         };
//
//         var style = styles.note;
//
//         if (index == currentFilmIndex) {
//             style = styles.choosen_note;
//         }
//
//         return (
//             <div className={style} onClick={onClick} onKeyUp={handleKeyUp} role="presentation">
//                 <p className={classes}> {title} </p>
//             </div>
//         );
//     }
// };
//
// Film.defaultProps = {
//     title: 'title',
//     classes: '',
//     content: 'content'
// };
//
// Film.propTypes = {
//     title: PropTypes.string,
//     classes: PropTypes.string,
//     content: PropTypes.string
// };
//
// const mapStateToProps = (state) => {
//     return {
//         currentFilmIndex: state.film.filmIndex
//     }
// }
//
// const mapDispatchToProps = (dispatch) => ({
//     chooseFilm: bindActionCreators(setCurrentFilm, dispatch)
// });
//
//
