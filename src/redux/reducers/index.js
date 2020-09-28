import setSearchReducer from './setSearch';
import setSearchByIDReducer from './setSearchByID';
import userReducer from './user';
import toggleSidebarReducer from './toggleSidebar';
import {combineReducers} from 'redux';
import userStoreReducer from './userStore';
import setCurrentVideoReducer from './setCurrentVideo';
import updateSearchReducer from './updateSearch';


const rootReducer = combineReducers({ 
   searchQuery:setSearchReducer,
   selectedVideoID:setSearchByIDReducer,
   authenticated:userReducer,
   toggleSidebar:toggleSidebarReducer,
   userStore:userStoreReducer,
   currentVideo:setCurrentVideoReducer,
   updatedVideoList:updateSearchReducer,
})


export default rootReducer;