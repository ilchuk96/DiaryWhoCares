// @flow
import React from 'react';
import PropTypes from 'prop-types';
import Note from '../note/Note';
import AddNewNote from '../new_note/AddNewNote';
import styles from './ListOfNotes.css'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addNotes, loadNotes } from '../../actions/notes';


class ListOfNotes extends React.Component {

  componentDidMount() {
    this.props.loadNotes(1, 10);
  };

  render() {
    var notes = []
    if(this.props && this.props.notes) {
      notes = this.props.notes;
    }
    const listItems = notes.map((d) =>
      <Note key={d.id} title={d.name} content={d.content} index={d.id}/>
    );
    const addNewNote = <AddNewNote key="new_note" />
    listItems.unshift(addNewNote);
    return (
      <div className={styles.list}>
        {listItems}
      </div>
    );
  }
};

ListOfNotes.propTypes = {
  changeContent: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    notes: state.note.notes
  }
}
const mapDispatchToProps = (dispatch) => ({
  addNotes: bindActionCreators(addNotes, dispatch),
  loadNotes: bindActionCreators(loadNotes, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ListOfNotes);
