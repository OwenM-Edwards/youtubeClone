import youtube from '../../api/youtube';


export const setSearch = (searchTerm) => async (dispatch) => {
   const videoResponse = await youtube.get('search', { 
      params: {
         part: 'snippet',
         maxResults: 3,
         key: 'AIzaSyChmmFF1_eI9QnAvb1VTb88zjWTC8PkUG0',
         q: searchTerm,
      }
   })
   dispatch({
      type: 'UPDATE_RESULTS',
      payload: {
         isFetching: false,
         videos: videoResponse.data.items,
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