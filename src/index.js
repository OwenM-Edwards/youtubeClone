import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './redux/store';
//STORE => GLOBALISED STATE

//ACTION => INCREMENT. FUNCTION THAT RETURNS AN OBJECT. TYPE = NAME

//REDUCER => 

//DISPATCH => SENDS STUFF AROUND, I.E / ACTION => REDUCER

render(
   <Provider store={store}>
      <App />
   </Provider>, document.querySelector('#root')
);