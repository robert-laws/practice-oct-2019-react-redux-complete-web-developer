import React, { Component } from 'react';
import CardList from './components/CardList/CardList.component';

import './App.scss';

import { robots } from './data/robots';

class App extends Component {
  render() {
    return (
      <div className="container">
        <CardList robots={robots} />
      </div>
    );
  }
}

export default App;
