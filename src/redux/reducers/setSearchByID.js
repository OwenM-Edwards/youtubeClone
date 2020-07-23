const initialState = {
   video:null,
   isFetching: true,
};


const setSearchByIDReducer = (state = initialState, action) => {
   switch(action.type){
      case 'SEARCH_BY_ID':
         return {
            video: action.payload.video,
            isFetching:action.payload.isFetching,
         }
      
      default:
         return state;
   }
}


export default setSearchByIDReducer;