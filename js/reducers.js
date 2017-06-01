// @flow
import { combineReducers } from 'redux';
import { SET_SEARCH_TERM } from './actions';

// new way of writing reducers...single action reducers
const searchTerm = (state='', action: Action) => {
  if (action.type === SET_SEARCH_TERM){
    return action.payload;
  }
  return state;
};

const rootReducer = combineReducers({ searchTerm });
// ({ searchTerm }) is the same as ({ searchTerm: searchTerm })

export default rootReducer;
