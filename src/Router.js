import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Sidebar, Header } from './components';
import { Watch, Search } from './containers';
import StyledContent from './styles/Content';


const Wrapper = styled.section`
   width:100%;
   height:100%;
   display:flex;
   flex-direction: column;
   background-color:#181818;
`;


const AppRouter = () => {
   return(
      <Router>
         <Wrapper>
            <Header></Header>
            <StyledContent> 
               <Switch>
                  <Route 
                     path="/search/:searchstring"
                     render={() => <Search/>} 
                  />
                  <Route 
                     path="/watch/:videoId"
                     render={() => <Watch/>} 
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