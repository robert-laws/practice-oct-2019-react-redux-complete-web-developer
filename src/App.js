import React, { Component } from 'react';
import { connect } from 'react-redux';
import Scroll from './components/Scroll/Scroll.component';
import CardList from './components/CardList/CardList.component';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner.component';
import SearchBox from './components/SearchBox/SearchBox.component';
import ErrorBoundry from './components/ErrorBoundry';

import { setSearchField } from './redux/search/search.actions';
import { getRobots } from './redux/robots/robots.actions';


import './App.scss';

class App extends Component {
  componentDidMount = () => {
    this.props.onGetRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending, error } = this.props;
    
    const filteredRobots = robots.filter(robot => (
      robot.name.toLowerCase().includes(searchField.toLowerCase()))
    )

    return (
      <div className="container">
        <div className='text-center'>
          <h1 className='app-title'>RoboFriends</h1>
          <SearchBox handleChange={onSearchChange} />
        </div>
        {isPending ? <LoadingSpinner /> : 
          (
            error !== '' ? <p>{error}</p> : (
              <Scroll>
                <ErrorBoundry>
                  <CardList robots={filteredRobots} />
                </ErrorBoundry>
              </Scroll>
            )
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onGetRobots: () => dispatch(getRobots())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
