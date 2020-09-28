import youtube from '../../api/youtube';


export const setSearch = (videoResponse) => async (dispatch) => {
   // const videoResponse = await cloudinary.get(`search/${searchTerm}`);
   dispatch({
      type: 'SET_RESULTS',
      payload: {
         isFetching: false,
         videos: videoResponse
      },
   });
};

export const updateSearch = (list) => (dispatch) => {
   dispatch({
      type: 'UPDATE_RESULTS',
      payload: {
         videos: list
      },
   });
};

export const setSearchById = (searchID) => async (dispatch) => {
   const videoResponse = await youtube.get('videos', { 
      params: {
         part: 'snippet',
         key: 'AIzaSyChmmFF1_eI9QnAvb1VTb88zjWTC8PkUG0',
         id: searchID,
      }
   })
   dispatch({
      type: 'SEARCH_BY_ID',
      payload: {
         isFetching: false,
         video: videoResponse.data.items[0],
      },
   })
};

export const authenticateUser = (payload) => (dispatch) => {
   dispatch({
      type: 'SIGN_IN',
         payload: payload, 
   });
}

export const userStore = (payload) => (dispatch) => {
   dispatch({
      type: 'STORE_USER',
      payload: payload,
   })
}

export const toggleSidebar = (payload) => (dispatch) => {
   dispatch({
      type: 'TOGGLE_SIDEBAR',
         payload: payload,
   })
}

export const setCurrentVideo = (payload) => (dispatch) => {
   dispatch({
      type: 'SET_CURRENT_VIDEO',
      payload: {
         video: payload,
         isFetching: false,
      }
   })
}