import React, { Component } from 'react';
import Scroll from './components/Scroll/Scroll.component';
import CardList from './components/CardList/CardList.component';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner.component';
import SearchBox from './components/SearchBox/SearchBox.component';
import ErrorBoundry from './components/ErrorBoundry';

import './App.scss';

class App extends Component {
  state = {
    loading: true,
    robots: [],
    searchText: ''
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  componentDidMount = async () => {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/users').then(async(response) => {
        return await response.json();
      })

      if(data.length > 0) {
        this.setState({
          robots: data,
          loading: false
        })      
      }
    } catch (error) {
      console.error(error)
    }   
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => (
      robot.name.toLowerCase().includes(this.state.searchText.toLowerCase()))
    )

    const { loading } = this.state;

    return (
      <div className="container">
        <div className='text-center'>
          <h1 className='app-title'>RoboFriends</h1>
          <SearchBox handleChange={this.handleChange} />
        </div>
        {loading ? <LoadingSpinner /> : 
          (
            <Scroll>
              <ErrorBoundry>
                <CardList robots={filteredRobots} />
              </ErrorBoundry>
            </Scroll>
          )
        }
      </div>
    );
  }
}

export default App;
