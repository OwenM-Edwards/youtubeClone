import youtube from '../../api/youtube';
import { bindActionCreators } from 'redux';


export function setSearch (searchTerm) {
   return async dispatch => {
      const response = await youtube.get('search', { 
         params: {
            part: 'snippet',
            maxResults: 5,
            key: 'AIzaSyDiZbhIPYD9QRtRjN5ZnfyRgy6XA0obdBU',
            q: searchTerm,
         }
      })
      dispatch({
         type:'UPDATE_RESULTS',
         payload:response.data.items,
      })
   }
}


export const selectVideo = (video) => (dispatch) => {
   dispatch({
      type: 'SELECT_VIDEO',
      payload:video
   })
}