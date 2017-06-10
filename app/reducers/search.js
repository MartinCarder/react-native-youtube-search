import {
  FETCH_SEARCH_SUCCESS,
  FETCH_SEARCH_FAILURE,
  FETCH_SEARCH_REQUEST,
} from '../actions/';

const searchData = (state = {
  isFetching: false,
  isError: false,
  searchTerm: '',
  data: [],
}, action) => {
  switch (action.type) {
    case FETCH_SEARCH_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isError: false,
        searchTerm: action.searchTerm,
      });

    case FETCH_SEARCH_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isError: true,
      });

    case FETCH_SEARCH_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isError: false,
        data: action.data,
      });

    default:
      return state;
  }
};

export default searchData;
