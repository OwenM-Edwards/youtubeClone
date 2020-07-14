import React from "react";
import styled from "styled-components";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { Sidebar, Header } from './components';
import { Watch, SearchList } from './pages';
import StyledContent from './styles/Content';

const Wrapper = styled.section`
   width:100%;
   height:100%;
   display:flex;
   flex-direction: column;
`;

const AppRouter = () => {

   return(
      <Router>
         <Wrapper>
            <Header></Header>
            <StyledContent> 
               <Switch>
                  <Route 
                     exact path="/watch"
                     render={() => <Watch/>} 
                  />
                  <Route 
                     exact path="/search"
                     render={() => <SearchList/>} 
                  />
                  <Route path="/"/>
                  <Redirect to="/" />
               </Switch>
            </StyledContent>
            <Sidebar></Sidebar>
         </Wrapper>
      </Router>
   )
}


export default AppRouter;