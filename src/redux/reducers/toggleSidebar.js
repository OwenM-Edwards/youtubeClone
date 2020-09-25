const initialState = {
   isExtended:true,
};


const toggleSidebarReducer = (state = initialState, action) => {
   switch(action.type){
      case 'TOGGLE_SIDEBAR':
         return {
            isExtended: action.payload,
         }
      
      default:
         return state;
   }
}


export default toggleSidebarReducer;