const selectVideoReducer = (state = null, action) => {
   switch(action.type){
      case 'SELECT_VIDEO':
         return {
            payload:action.payload
         }
      
      default:
         return state;
   }
}

export default selectVideoReducer;