import setSearchReducer from './setSearch';
import setSearchByIDReducer from './setSearchByID';
import userReducer from './user';
import toggleSidebarReducer from './toggleSidebar';
import {combineReducers} from 'redux';
import userStoreReducer from './userStore';

const rootReducer = combineReducers({ 
   searchQuery:setSearchReducer,
   selectedVideoID:setSearchByIDReducer,
   authenticated:userReducer,
   toggleSidebar:toggleSidebarReducer,
   userStore:userStoreReducer,
})


export default rootReducer;