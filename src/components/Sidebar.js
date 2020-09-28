import React from 'react';
import styled from "styled-components";
import { useHistory, useLocation, useRef } from "react-router-dom";
import {useSelector} from 'react-redux';


// Main sidebar to left of page.
const Sidebar = () => {
   const history = useHistory();
   const location = useLocation();
   const divRef = React.useRef();
   const sidebarToggleState = useSelector(state=>state.toggleSidebar.isExtended);

   // On sidebar button click, send to relevant page.
   const handleButtonClick = (target) => {
      switch(target){
         case 'home':
            history.push(`/home`);
            break;
         case 'subscriptions':
            history.push(`/subscriptions`);
            break;
         case 'library':
            history.push(`/library`);
            break;
         case 'history':
            history.push(`/history`);
            break;
         default:
            history.push(`/home`);
      }
   }

   // Conditional styling for active button, depending on current app path location.
   const buttonActiveStyle = { backgroundColor: "#383838", };
   const buttonInactiveStyle = { backgroundColor: "#1f1f1f", };

   if (sidebarToggleState){
      return(
         // Retracted, smaller sidebar.
         <React.Fragment>
            <StyledRetractedButtonContainer>
               <StyledRetractedButton 
                     ref={divRef} 
                     style={location.pathname === '/' || location.pathname === '/home' ? buttonActiveStyle : buttonInactiveStyle}
                     onClick={()=>handleButtonClick('home')}   
                  >
                  <StyledRetractedButtonImage src={require('../img/home.png')}/>
                  Home
               </StyledRetractedButton>
   
               <StyledRetractedButton 
                     ref={divRef} 
                     style={location.pathname === '/subscriptions' ? buttonActiveStyle : buttonInactiveStyle}
                     onClick={()=>handleButtonClick('subscriptions')}   
                  >
                  <StyledRetractedButtonImage src={require('../img/subscription.png')}/>
                  Subscriptions
               </StyledRetractedButton>
            </StyledRetractedButtonContainer>
           
            <StyledRetractedButtonContainer>
               <StyledRetractedButton 
                     ref={divRef} 
                     style={location.pathname === '/library' ? buttonActiveStyle : buttonInactiveStyle}
                     onClick={()=>handleButtonClick('library')}   
                  >
                  <StyledRetractedButtonImage src={require('../img/library.png')}/>
                  Libary
               </StyledRetractedButton>
   
               <StyledRetractedButton 
                     ref={divRef} 
                     style={location.pathname === '/history' ? buttonActiveStyle : buttonInactiveStyle}
                     onClick={()=>handleButtonClick('history')}   
                  >
                  <StyledRetractedButtonImage src={require('../img/history.png')}/>
                  History
               </StyledRetractedButton>
            </StyledRetractedButtonContainer>
         </React.Fragment>
         
      )
   }

   else{
      return(
         // Full extended sidebar.
         <React.Fragment>
            <StyledButtonContainer>
               <StyledButton 
                     ref={divRef} 
                     style={location.pathname === '/' || location.pathname === '/home' ? buttonActiveStyle : buttonInactiveStyle}
                     onClick={()=>handleButtonClick('home')}   
                  >
                  <StyledButtonImage src={require('../img/home.png')}/>
                  Home
               </StyledButton>
   
               <StyledButton 
                     ref={divRef} 
                     style={location.pathname === '/subscriptions' ? buttonActiveStyle : buttonInactiveStyle}
                     onClick={()=>handleButtonClick('subscriptions')}   
                  >
                  <StyledButtonImage src={require('../img/subscription.png')}/>
                  Subscriptions
               </StyledButton>
            </StyledButtonContainer>
           
            <StyledButtonContainer>
               <StyledButton 
                     ref={divRef} 
                     style={location.pathname === '/library' ? buttonActiveStyle : buttonInactiveStyle}
                     onClick={()=>handleButtonClick('library')}   
                  >
                  <StyledButtonImage src={require('../img/library.png')}/>

                  Libary
               </StyledButton>
   
               <StyledButton 
                     ref={divRef} 
                     style={location.pathname === '/history' ? buttonActiveStyle : buttonInactiveStyle}
                     onClick={()=>handleButtonClick('history')}   
                  >
                  <StyledButtonImage src={require('../img/history.png')}/>
                  History
               </StyledButton>
            </StyledButtonContainer>
         </React.Fragment>
      )
   }

}

// Full extended sidebar.
const StyledSidebar = styled.nav`
   position:fixed;
   height:100%;
   width:210px;
   left:0;
   overflow-x:hidden;
   overflow-y:hidden;
   background-color: #1f1f1f;
   color: #e3e3e3;
   &:hover {
      overflow-y:scroll;
   }
   padding-top:90px;
   display:block;

`;
const StyledButton= styled.button`
   width:100%;
   height:40px;
   margin: 5px auto;
   background-color: #1f1f1f;
   color:#e3e3e3;
   border: none;
   cursor:pointer;
   text-align:left;
   padding-left:30px;
   padding-bottom:5px;

`
const StyledButtonContainer= styled.div`
   width:100%;
   height:auto;
   margin-bottom:20px;
   border-bottom:1px solid rgba(255,255,255,0.2);

`
const StyledButtonImage = styled.img`
   width:20px;
   position:relative;
   right:10px;
   top:4px;
`

const StyledRetractedButtonContainer= styled.div`
   width:100%;
   height:auto;
   border-top:1px solid rgba(255,255,255,0.2);
   border-bottom:1px solid rgba(255,255,255,0.2);

`
const StyledRetractedButton= styled.button`
   width:100%;
   height:70px;
   padding-left:5px;
   background-color: #1f1f1f;
   color:#e3e3e3;
   border: none;
   cursor:pointer;
   text-align:center;
   font-size:0.6rem;
   

`
const StyledRetractedButtonImage = styled.img`
   width:20px;
   position:relative;
   left:18px;
   bottom:3px;
   display:block;
`


export default Sidebar