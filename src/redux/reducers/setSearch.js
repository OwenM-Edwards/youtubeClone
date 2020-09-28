const initialState = {
   videos:false,
   isFetching: true,
};



const setSearchReducer = (state = initialState, action) => {
   switch(action.type){
      case 'SET_RESULTS':
         return {
            videos: action.payload.videos,
            isFetching:action.payload.isFetching,
         }
      
      default:
         return state;
   }
}



export default setSearchReducer;