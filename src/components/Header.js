import React, {useState, useContext} from 'react';
import styled from "styled-components";
import { SearchBar} from '../components';
import {
   Link,
} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import { authenticateUser, toggleSidebar } from '../redux/actions';
import profileImg from '../img/blankProfile.png';



// Topbar of page, 
// holds the site logo,
// login button and status
// and the main searchbar.
const Header = () => {
   const dispatch = useDispatch();
   const [profileTabState, setProfileTabState] = useState(false);
   const authenticated = useSelector(state=>state.authenticated.authenticated);
   const sidebarToggleState = useSelector(state=>state.toggleSidebar.isExtended);
  

   const loginUser = (state) => {
      dispatch(authenticateUser(state));
   }

   // Fired from mobile style hamburger button, extends or retracts the sidebar.
   const handleToggleSidebar = () => {
      if (sidebarToggleState === true){
         dispatch(toggleSidebar(false));
      }
      else {
         dispatch(toggleSidebar(true));
      }
   }

   return(
      <StyledHeader>
         <StyledMobileBurgerButton onClick={handleToggleSidebar}>
            <StyledMobileBurgerButtonImg src={require('../img/mobileBurger.png')}/>
         </StyledMobileBurgerButton>
         <Link style={{width:"0"}} to="/">
            <StyledLogo src={require('../img/test.png')}></StyledLogo>
         </Link>
         
         <SearchBar/>

         {authenticated
            ?  <Link to="/upload" style={{ textDecoration: 'none' }}>
                  <StyledUploadButton><StyledUploadImage src={require('../img/upload.png')}/></StyledUploadButton>
               </Link> 
            :  <Link to="/signin" style={{ textDecoration: 'none' }}>
                  <StyledUploadButton><StyledUploadImage src={require('../img/upload.png')}/></StyledUploadButton>
               </Link> 
         }

         <React.Fragment>
            {authenticated 
               ?  <StyledProfileButtonLoggedIn onClick={()=>profileTabState? setProfileTabState(false):setProfileTabState(true) }/>
               :  <Link to="/signIn" style={{ textDecoration: 'none' }}>
                     <StyledProfileButtonLoggedOut onClick={()=>profileTabState? setProfileTabState(false):setProfileTabState(true) }>
                        <StyledProfileImg src={profileImg}/>
                        <p style={{fontSize:"18px" ,color:"#E3E3E3"}}>SIGN IN</p>
                     </StyledProfileButtonLoggedOut>
                  </Link>
            }
            {profileTabState 
               ? authenticated 
                  ? <StyledProfileTab><h1 onClick={()=>loginUser(false)}>SIGN OUT</h1></StyledProfileTab> 
                  : <React.Fragment/> 
               : <React.Fragment/>
            }
         </React.Fragment>


      </StyledHeader>
   )
}



const StyledUploadButton = styled.button`
   width:50px;
   height:33px;
   cursor:pointer;
   position:relative;
   bottom:5px;
   right:10px;

   outline:none;
   color:inherit;
   background:none;
   border:none;
`
const StyledUploadImage = styled.img`
   width:100%;
`

const StyledHeader = styled.header`
   flex-shrink: 0;
   width:100%;
   height:60px;
   background-color:${props => props.theme.primaryBGColor};
   display:flex;
   flex-direction:row;
   box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
   color:#e3e3e3;
   padding:10px;
   padding-top:20px;
   box-sizing: border-box;  
   z-index:2;
`

const StyledLogo = styled.img`
   height:170%;
   position:relative;
   left:28px;
   bottom:15px;
`
const StyledMobileBurgerButton = styled.button`
   outline:none;
   color:inherit;
   background:none;
   margin:0;
   border:none;
   position:relative;
   left:0px;
   width:40px;
   bottom:5px;
   cursor:pointer;
`
const StyledMobileBurgerButtonImg = styled.img`
   height: 90%;
`

const StyledProfileButtonLoggedIn = styled.button`
   background-color:orange;
   z-index:2;
   border-radius:100%;
   position:relative;
   width:40px;
   height:40px;
   bottom:10px;
   cursor:pointer;
`

const StyledProfileButtonLoggedOut = styled.button`
   background-color:${props => props.theme.primaryBGColor};
   color:${props => props.theme.primaryFontColor};
   z-index:2;
   position:relative;
   width:120px;
   height:40px;
   bottom:10px;
   cursor:pointer;
   display:flex;
   padding:10px;
   justify-content:center;
   align-items:center;
   border-radius:2px;
   transition: all 0.2s;
   text-decoration: none;
   border:1px solid ${props => props.theme.primaryFontColor};

   // &:hover {
   //    background-color:${props => props.theme.primaryFontColor};
   // }

`

const StyledProfileTab = styled.div`
   background-color:${props => props.theme.primaryBGColor};
   border-bottom: 0.6px solid ${props => props.theme.primaryFontColor};
   border-right: 0.6px solid ${props => props.theme.primaryFontColor};
   border-left: 0.6px solid ${props => props.theme.primaryFontColor};
   position:relative;
   z-index:-1;
   position:absolute;
   width:140px;
   height:300px;
   top:30px;
   right:80px;
   text-align:center;
`
const StyledProfileImg = styled.img`
   height:120%;
   padding-right:10px;

`



export default Header