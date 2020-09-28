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
// import StyledContent from './styles/Content';
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
   background-color: #1f1f1f;
   display:flex;
   flex-wrap:wrap;
   box-sizing: border-box;  
`;

const StyledHeader = styled.header`
   width:100%;
   height:60px;

   z-index:1;
   background-color:${props => props.theme.primaryBGColor};


   color:#e3e3e3;
   position:fixed;
   flex-shrink:3;
   justify-content:space-between;
   display:flex;
   flex-direction:row;


`
const StyledSidebar = styled.nav`
   height:100%;
   width:70px;

   overflow-x:hidden;
   overflow-y:hidden;
   background-color: #1f1f1f;
   color: #e3e3e3;

   position:fixed;
   padding-top:80px;
   display:flex;
   flex-direction:column;
   flex-wrap:wrap;
`


const StyledContent = styled.div`
   background-color:#181818;
   // flex: 1 0 auto;
   width:100%;
   height:100%;
   overflow:hidden;
   display:flex;
   flex-wrap:wrap;
   padding:40px;
   -webkit-box-sizing: border-box; 
   -moz-box-sizing: border-box;   
   box-sizing: border-box;  
   color: white;
   margin-left:70px;
   padding-top:60px;

`


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
                        <StyledSidebar/>
                     </Wrapper>
        
                     : 
                     <Route path="/upload"><Redirect to="/signIn" /></Route>
               }
               </Route>
               

               <Wrapper>
                  <StyledHeader><Header/></StyledHeader>
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
                        <Route path="/"><Redirect to="/home" /></Route>
                  </StyledContent>
                  <StyledSidebar><Sidebar/></StyledSidebar>
               </Wrapper>
               <Redirect to="/home" />
            </Switch>
         </Router>
      </ThemeProvider>

   )
}


export default AppRouter;