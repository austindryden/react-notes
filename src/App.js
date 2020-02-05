import React from 'react';
import logo from './logo.svg';
import './App.css';
import NoteEditor from "./NoteEditor";
import Searchbar from "./Searchbar";
import NewNote from "./NewNote";
import NotesList from "./NotesList";


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchText:"",
      currentNote:"a1b2c3",
      notes:[
        {
          id:"a1b2c3",
          title:"first note",
          body:"unique word"
        },
        {
          id:"a1b2c4",
          title:"second note",
          body:"words!"
        },
        {
          id:"a1b2c5",
          title:"third note",
          body:"different words!"
        }
    ]
    }
  }

  render() {
    return (
      <div className="App">
        <NoteEditor noteid={this.state.currentNote} handleChange={this._updateNote} note={this.state.notes.filter(note => (note.id === this.state.currentNote))[0]} />
        <Searchbar searchText={this.state.searchText} handleChange={this._setSearchText}/>
        <br></br>
        <button onClick={this._createNote}>new note</button>
        <NotesList notes={this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.searchText.toLowerCase()) || note.body.toLowerCase().includes(this.state.searchText.toLowerCase()))} clickHandlerer={this._selectNote}/>
      </div>
    );
  }

  _selectNote = (currentNote) => {
    this.setState({currentNote});
  };

  _createNote = () => {
    let randomID = this.state.notes.length + 1;
    let newNote = {
                      id:randomID,
                      title:"",
                      body:""
                  }
    let newNotes = [...this.state.notes];
    newNotes.push(newNote);
    this.setState({notes:newNotes, currentNote:randomID})
  };

  _updateNote = (note,newTitle, newBody) => {
    // console.log(note, newBody);
    let newNotes = [...this.state.notes];
    newNotes = newNotes.filter(holder => holder != note);
    // console.log(this.state.notes);
    // console.log(newNotes);
    note.body = newBody;
    note.title = newTitle;
    newNotes.push(note);
    // console.log(note);
    // console.log(newNotes);
    this.setState({notes:newNotes})
  };

  _setSearchText = (searchText) => {
      this.setState({searchText})
  };
}
export default App;
