import setSearchReducer from './setSearch';
import selectVideoReducer from './selectVideo';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({ 
   searchQuery:setSearchReducer,
   selectedVideo:selectVideoReducer
})

export default rootReducer;