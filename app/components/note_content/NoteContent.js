// @flow
import React from 'react';
import styles from './NoteContent.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeText, changeTitle, addNotes, setCurrentNote  } from '../../actions/notes';
import NoteText from './note_text/NoteText';
import NoteTitle from './note_title/NoteTitle';
import FilmRecommendations from './film_content/FilmRecommendations'
import axios from 'axios';
import Center from './center/Center';


const recomendationURI = 'https://diarywhocares.tk/';

class NoteContent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const getRecomendation = () => {
        var self = this;
        var note = this.props.currentNote;
        axios.post(recomendationURI, {text: note.content}).then((response) => {
            var recommendations = response.data;
            note.recommendation = recommendations.map((recommendation)=>{return {
              title: recommendation.title,
              img: recommendation.img ? "data:image/jpeg;base64," + recommendation.img : undefined,
              description: recommendation.description
            }});
            self.props.addNotes([note]);
            this.props.chooseNote(note.id);
          }
        ).catch((e) => {
            console.log(e);
          }
        );
      }; 

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
        <div className={styles.container_content}>
        <div className={styles.content_container_margin} >
            <div className={styles.content} data-tid="cont1ainer">
                <NoteTitle content={title} changeTitle={changeTitle.bind(this)}/>
                <NoteText content={text} changeText={changeContent.bind(this)}/>
            </div>
        </div>
            <Center/>
            <FilmRecommendations recommendations={this.props.currentNote ? this.props.currentNote.recommendation : undefined} 
                onClick={getRecomendation.bind(this)}/>
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
  chooseNote: bindActionCreators(setCurrentNote, dispatch),
  changeText: bindActionCreators(changeText, dispatch),
  changeTitle: bindActionCreators(changeTitle, dispatch),
  addNotes: bindActionCreators(addNotes, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteContent);