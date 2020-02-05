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
      searchText:"search text",
      currentNote:0,
      notes:[{
        title:"first note",
        body:"  "
      }]
    }
  }

  render() {
    return (
      <div className="App">
        <NoteEditor />
        <Searchbar searchText={this.state.searchText}/>
        <NewNote />
        <NotesList />
      </div>
    );
  }

  _selectNote = () => {};
  _createNote = () => {};
  _updateNote = () => {};
  _setSearchText = () => {};
}
export default App;
