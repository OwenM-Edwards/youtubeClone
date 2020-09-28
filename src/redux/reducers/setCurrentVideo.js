const initialState = {
   video:false,
   isFetching:true,
};


const setCurrentVideo = (state = initialState, action) => {
   switch(action.type){
      case 'SET_CURRENT_VIDEO':
         return {
            video: action.payload.video,
            isFetching:action.payload.isFetching,
         }
      
      default:
         return state;
   }
}


export default setCurrentVideo;