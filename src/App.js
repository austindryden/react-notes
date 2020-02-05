import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
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
        
      </div>
    );
  }
}
export default App;
