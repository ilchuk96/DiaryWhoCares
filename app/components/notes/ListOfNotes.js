// @flow
import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';
import styles from './ListOfNotes.css'
import axios from 'axios';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { initNotes } from '../../actions/notes';

class ListOfNotes extends React.Component {

  componentDidMount() {
    axios.get('http://crypto-diary.com/events').then(response => {
      this.props.initNotes(response.data);
    });
  };

  render() {
    var notes = []
    console.log(this.props);
    if(this.props && this.props.notes) {
      notes = this.props.notes;
    }
    const listItems = notes.map((d, id) => <li key={d.name}>
      <Note title={d.name} content={d.content} index={id}/></li>);

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
  initNotes: bindActionCreators(initNotes, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ListOfNotes);
