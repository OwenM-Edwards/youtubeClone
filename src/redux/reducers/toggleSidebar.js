const initialState = {
   isExtended:true,
};


const toggleSidebarReducer = (state = initialState, action) => {
   switch(action.type){
      case 'TOGGLE_SIDEBAR':
         return {
            isExtended: action.payload,
            isFetching:action.payload.isFetching,
         }
      
      default:
         return state;
   }
}


export default toggleSidebarReducer;