import { combineReducers } from 'redux';
import searchData from './search';
import videoDetails from './videoDetails';

const rootReducer = combineReducers({
  searchData,
  videoDetails
});

export default rootReducer;
