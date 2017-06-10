import queryStringFromObj from '../utils/queryStringFromObj';

export const FETCH_SEARCH = 'FETCH_SEARCH';
export const FETCH_SEARCH_REQUEST = 'FETCH_SEARCH_REQUEST';
export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS';
export const FETCH_SEARCH_FAILURE = 'FETCH_SEARCH_FAILURE';

const API_KEY = 'AIzaSyDrSG8RFrAfALx1f46zle_9URMUzMJqafA';
const END_POINT = 'https://www.googleapis.com/youtube/v3/search';

export const fetchSearchRequest = (searchTerm) => {
  return {
    type: FETCH_SEARCH_REQUEST,
    searchTerm,
  };
};

export const fetchSearchSuccess = (data) => {
  return {
    type: FETCH_SEARCH_SUCCESS,
    data,
  }
}

export const fetchSearchFailure = (message) => {
  return {
    type: FETCH_SEARCH_FAILURE,
    message,
  };
};

export const fetchSearch = (searchTerm) => {
  let query = {
    part: 'snippet',
    maxResults: 50,
    type: 'video',
    videoDefinition: 'high',
    key: API_KEY,
    q: searchTerm,
  };

  query = queryStringFromObj(query);
  return (dispatch) => {
    dispatch(fetchSearchRequest(searchTerm));
    return fetch(`${END_POINT}?${query}`)
      .then(d => d.json())
      .then(d => {
        console.log(d);

        const data = d.items.map((item)=>{
          item.key = item.id.videoId
          return item;
        });

        dispatch(fetchSearchSuccess(data));

      })
      .catch((error) => {
        console.error(error);
        dispatch(fetchSearchFailure(error));
      });
  }

};
