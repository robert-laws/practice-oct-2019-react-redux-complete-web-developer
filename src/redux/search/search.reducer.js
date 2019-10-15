import types from './search.types';

const initialState = {
  searchField: ''
}

export const searchReducer = (state = initialState, action = {}) => {
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

export default searchReducer