import React, { Component } from 'react';
import './App.css';

import Content from '../src/Aplicathions/Content'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
           <Content />
        </header>
      </div>
    );
  }
}

export default App;
