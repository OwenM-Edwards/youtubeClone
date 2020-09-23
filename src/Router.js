import React from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Sidebar, Header } from './components';
import { Watch, Search, SignIn, Register, Home } from './containers';
import StyledContent from './styles/Content';

const theme = {
   primaryBGColor:'#1f1f1f',
   secondBGColor:'#181818',
   primaryFontColor:'#EAEAEA',
}


const Wrapper = styled.section`
   width:100%;
   height:100%;
   display:flex;
   flex-direction: column;
   background-color:#181818;
`;



const AppRouter = () => {
   return(
      <ThemeProvider theme={theme}>
         <Router>
            <Switch>
               <Route 
                  path="/signIn"
                  render={() => <SignIn/>} 
               />
               <Route 
                  path="/register"
                  render={() => <Register/>} 
               />

               <Wrapper>
                  <Header></Header>
                  <StyledContent> 
                        <Route 
                           path="/search/:searchstring"
                           render={() => <Search/>} 
                        />
                        <Route 
                           path="/watch/:videoId"
                           render={() => <Watch/>} 
                        />
                        <Route 
                           path="/home/"
                           render={() => <Home/>} 
                        />
                        <Route path="/"/>
                  </StyledContent>
                  <Sidebar></Sidebar>
               </Wrapper>

               <Redirect to="/" />
            </Switch>
         </Router>
      </ThemeProvider>

   )
}


export default AppRouter;