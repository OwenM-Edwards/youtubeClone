import setSearchReducer from './setSearch';
import setSearchByIDReducer from './setSearchByID';
import {combineReducers} from 'redux';


const rootReducer = combineReducers({ 
   searchQuery:setSearchReducer,
   selectedVideoID:setSearchByIDReducer,
})


export default rootReducer;