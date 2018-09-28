import React from 'react';
import './stylesheets/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.txt}</h1>
        <b>Off</b>
      </div>
    )
  }
}

export default App;
