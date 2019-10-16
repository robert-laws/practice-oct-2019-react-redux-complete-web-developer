import types from './search.types';

const initialStateSearch = {
  searchField: ''
}

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case types.CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.payload
      }
  
    default:
      return state;
  }
}

export default searchRobots;