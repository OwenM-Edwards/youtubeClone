const initialState = {
   authenticated:false,
};


const userReducer = (state = initialState, action) => {
   switch(action.type){
      case 'SIGN_IN':
         return {
            authenticated:action.payload,
         }
      
      default:
         return state;
   }
}


export default userReducer; 