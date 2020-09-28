const initialState = {
   videos:false,
}


const updateSearchReducer = (state = initialState, action) => {
   switch(action.type){
      case 'UPDATE_RESULTS':
         return {
            videos: action.payload.videos,
         }
      
      default:
         return state;
   }
}


export default updateSearchReducer;