import {
  CLOSE_VIDEO_DETAILS,
  FETCH_VIDEO_DETAILS_SUCCESS,
  FETCH_VIDEO_DETAILS_FAILURE,
  FETCH_VIDEO_DETAILS_REQUEST,
} from '../actions/videoDetails';

const videoDetailsData = (state = {
  isFetching: false,
  isError: false,
  searchTerm: '',
  data: [],
  showDetails: false,
}, action) => {
  switch (action.type) {

    case CLOSE_VIDEO_DETAILS:
      return Object.assign({}, state, {
        showDetails: false,
      });

    case FETCH_VIDEO_DETAILS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isError: false,
        vId: action.vId,
      });

    case FETCH_VIDEO_DETAILS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isError: true,
      });

    case FETCH_VIDEO_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isError: false,
        data: action.data,
        showDetails: true,
      });

    default:
      return state;
  }
};

export default videoDetailsData;
