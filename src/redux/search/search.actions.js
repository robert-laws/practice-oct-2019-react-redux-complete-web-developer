import types from './search.types';

export const setSearchField = text => ({
  type: types.CHANGE_SEARCH_FIELD,
  payload: text
})