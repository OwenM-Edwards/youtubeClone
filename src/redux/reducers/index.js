import setSearchReducer from './setSearch';
import setSearchByIDReducer from './setSearchByID';
import userReducer from './user';
import {combineReducers} from 'redux';


const rootReducer = combineReducers({ 
   searchQuery:setSearchReducer,
   selectedVideoID:setSearchByIDReducer,
   authenticated:userReducer,
})


export default rootReducer;