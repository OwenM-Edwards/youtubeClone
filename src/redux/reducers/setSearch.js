const initialState = {
   videos:'',
   isFetching: true,
};


const setSearchReducer = (state = initialState, action) => {
   switch(action.type){
      case 'UPDATE_RESULTS':
         return {
            videos: action.payload.videos,
            isFetching:action.payload.isFetching,
         }
      
      default:
         return state;
   }
}


export default setSearchReducer;