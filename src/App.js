import React, { Component } from 'react';
import CardList from './components/CardList/CardList.component';
import SearchBox from './components/SearchBox/SearchBox.component';

import './App.scss';

import { robots } from './data/robots';

class App extends Component {
  state = {
    robots: robots,
    searchText: ''
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => (
      robot.name.toLowerCase().includes(this.state.searchText.toLowerCase()))
    )

    return (
      <div className="container">
        <div className='text-center'>
          <h1 className='app-title'>RoboFriends</h1>
          <SearchBox handleChange={this.handleChange} />
        </div>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
