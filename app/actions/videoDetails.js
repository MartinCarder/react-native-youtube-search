import queryStringFromObj from '../utils/queryStringFromObj';

export const CLOSE_VIDEO_DETAILS = 'CLOSE_VIDEO_DETAILS';
export const FETCH_VIDEO_DETAILS = 'FETCH_VIDEO_DETAILS';
export const FETCH_VIDEO_DETAILS_REQUEST = 'FETCH_VIDEO_DETAILS_REQUEST';
export const FETCH_VIDEO_DETAILS_SUCCESS = 'FETCH_VIDEO_DETAILS_SUCCESS';
export const FETCH_VIDEO_DETAILS_FAILURE = 'FETCH_VIDEO_DETAILS_FAILURE';

const API_KEY = 'AIzaSyDrSG8RFrAfALx1f46zle_9URMUzMJqafA';
const END_POINT = 'https://www.googleapis.com/youtube/v3/videos';

export const closeVideoDetails = () => {
  return {
    type: CLOSE_VIDEO_DETAILS,
  };
}

export const fetchVideoDetailsRequest = (vId) => {
  return {
    type: FETCH_VIDEO_DETAILS_REQUEST,
    vId,
  };
};

export const fetchVideoDetailsSuccess = (data) => {
  return {
    type: FETCH_VIDEO_DETAILS_SUCCESS,
    data,
  }
}

export const fetchVideoDetailsFailure = (message) => {
  return {
    type: FETCH_VIDEO_DETAILS_FAILURE,
    message,
  };
};

export const fetchVideoDetails = (vId) => {
  let query = {
    part: 'snippet,contentDetails,statistics',
    key: API_KEY,
    id: vId,
  };

  query = queryStringFromObj(query);
  return (dispatch) => {
    dispatch(fetchVideoDetailsRequest(vId));
    return fetch(`${END_POINT}?${query}`)
      .then(d => d.json())
      .then(d => {
        console.log(d);

        const data = d.items.map((item)=>{
          item.key = item.id.videoId
          return item;
        });

        dispatch(fetchVideoDetailsSuccess(data));

      })
      .catch((error) => {
        console.error(error);
        dispatch(fetchVideoDetailsFailure(error));
      });
  }

};
