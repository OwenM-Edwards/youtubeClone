const setSearchReducer = (state = null, action) => {
   switch(action.type){
      case 'UPDATE_RESULTS':
         return {
            payload:action.payload
         }
      
      default:
         return state;
   }
}

export default setSearchReducer;