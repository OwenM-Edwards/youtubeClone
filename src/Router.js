import React from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Sidebar, Header } from './components';
import { Watch, Search, SignIn, Register, Home, Upload } from './containers';
import StyledContent from './styles/Content';
import {useSelector} from 'react-redux';

const theme = {
   primaryBGColor:'#1f1f1f',
   secondBGColor:'#181818',
   primaryFontColor:'#e3e3e3',
   hightlightColor:'#383838',
}


const Wrapper = styled.section`
   width:100%;
   height:100%;
   display:flex;
   flex-direction: column;
   background-color:#181818;
`;


const AppRouter = () => {
   const authenticated = useSelector(state=>state.authenticated.authenticated);
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
               <Route path="/upload">
               {
                  authenticated 
                     ? 
                     <Wrapper>
                        <Header/>
                        <StyledContent> 
                           <Route
                              path="/upload"
                              render={() => <Upload/>}
                           />
                        </StyledContent>
                        <Sidebar/>
                     </Wrapper>
        
                     : 
                     <Route
                        path="/upload"
                        render={() => <SignIn/>}
                     />
               }
               </Route>
               

               <Wrapper>
                  <Header/>
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
                        <Route
                           path="/upload"
                           render={() => <Upload/>}
                        />
                        <Route path="/"/>
                  </StyledContent>
                  <Sidebar/>
               </Wrapper>

               <Redirect to="/" />
            </Switch>
         </Router>
      </ThemeProvider>

   )
}


export default AppRouter;