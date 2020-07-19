import React from 'react';
import Router from './Router'

// TO ACCESS REDUX STATE
import {useSelector,useDispatch} from 'react-redux';
import {setSearch} from './redux/actions';

const App = () => {
   const searchString = useSelector (state => state.searchString);
   const dispatch = useDispatch();
   dispatch(setSearch('test'))
   // TO USE ON DISPATCH
   // for example, on click -->  onClick={()=> dispatch(increment())}
   return (
      <Router></Router>
   )
}

export default App;

