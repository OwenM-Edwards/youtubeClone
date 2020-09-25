import React, {useEffect} from 'react';
import Router from './Router'
import {useDispatch} from 'react-redux';
import { authenticateUser } from './redux/actions';

const App = () => {
   const dispatch = useDispatch();
   useEffect(() => {
      const isLoggedInUser = localStorage.getItem("user");
      if (isLoggedInUser === false ) {
         dispatch(authenticateUser(true));
      }
      else {
         dispatch(authenticateUser(false));
      }
   })
   return (
      <Router></Router>
   )
}


export default App;

