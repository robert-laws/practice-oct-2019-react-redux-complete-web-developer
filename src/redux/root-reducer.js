import { combineReducers } from 'redux';

import searchRobots from './search/search.reducer';
import requestRobots from './robots/robots.reducer';

export default combineReducers({
  searchRobots,
  requestRobots
})