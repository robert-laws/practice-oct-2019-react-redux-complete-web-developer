import React, { Component } from 'react';
import { connect } from 'react-redux';
import Scroll from './components/Scroll/Scroll.component';
import CardList from './components/CardList/CardList.component';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner.component';
import SearchBox from './components/SearchBox/SearchBox.component';
import ErrorBoundry from './components/ErrorBoundry';

import { setSearchField } from './redux/search/search.actions';


import './App.scss';

class App extends Component {
  state = {
    loading: true,
    robots: []
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
    const { loading } = this.state;
    const { searchField, onSearchChange } = this.props;
    
    const filteredRobots = this.state.robots.filter(robot => (
      robot.name.toLowerCase().includes(searchField.toLowerCase()))
    )

    return (
      <div className="container">
        <div className='text-center'>
          <h1 className='app-title'>RoboFriends</h1>
          <SearchBox handleChange={onSearchChange} />
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

const mapStateToProps = state => {
  return {
    searchField: state.search.searchField
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
