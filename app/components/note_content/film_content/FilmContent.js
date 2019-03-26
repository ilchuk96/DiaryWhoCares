// @flow
import React from 'react';
import styles from './FilmContent.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeText, changeTitle } from '../../../actions/notes';

class NoteContent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const changeContent = (e) => {
            this.props.changeText(this.props.currentNote, e.target.value);
        };

        const changeTitle = (e) => {
            this.props.changeTitle(this.props.currentNote, e.target.value);
        };

        var text = '';
        var title = '';
        if(this.props && this.props.currentNote && this.props.currentNote.content) {
            text = this.props.currentNote.content;
        }
        if(this.props && this.props.currentNote && this.props.currentNote.title) {
            title = this.props.currentNote.title;
        }
        return (
            <div className={styles.container_text_editor} data-tid="cont1ainer">
                
            </div>
        );
    }

};

const mapStateToProps = (state) => {
    return {
        currentNote: state.note.currentNote
    }
}
const mapDispatchToProps = (dispatch) => ({
    changeText: bindActionCreators(changeText, dispatch),
    changeTitle: bindActionCreators(changeTitle, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteContent);