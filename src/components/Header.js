import React, {useState} from 'react';
import styled from "styled-components";
import { SearchBar} from '../components';
import {
   Link,
   useHistory,
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
   const history = useHistory();
   const [profileTabState, setProfileTabState] = useState(false);
   const authenticated = useSelector(state=>state.authenticated.authenticated);
   const sidebarToggleState = useSelector(state=>state.toggleSidebar.isExtended);
  
   const logoutUser = () => {
      localStorage.clear();
      window.location.reload();
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
      <React.Fragment>
         <StyledMobileBurgerButton onClick={handleToggleSidebar}>
            <StyledMobileBurgerButtonImg src={require('../img/mobileBurger.png')}/>
         </StyledMobileBurgerButton>

         
            <Link to="/home">
               <div style={{height:'100%', display:'flex', alignItems:'center'}}>
                  <StyledLogo src={require('../img/test.png')}></StyledLogo>
               </div>
            </Link>
         

         
         <StyledSearchContainer><SearchBar/></StyledSearchContainer>
         

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
                     <div style={{paddingRight:'10px',height:'100%', display:'flex', alignItems:'center'}}>
                        <StyledProfileButtonLoggedOut onClick={()=>profileTabState? setProfileTabState(false):setProfileTabState(true) }>
                           <StyledProfileImg src={profileImg}/>
                           <p style={{fontSize:"1rem" ,color:"#6bbef2"}}>SIGN IN</p>
                        </StyledProfileButtonLoggedOut>
                     </div>
                  </Link>
            }
            {profileTabState 
               ? authenticated 
                  ? <StyledProfileTab><h1 onClick={()=>logoutUser()}>SIGN OUT</h1></StyledProfileTab> 
                  : <React.Fragment/> 
               : <React.Fragment/>
            }
         </React.Fragment>


      </React.Fragment>
   )
}

const StyledSearchContainer = styled.div`
   height:auto;
   display:flex;
   flex-grow:1;
`

const StyledUploadButton = styled.button`
   height:100%;
   cursor:pointer;
   outline:none;
   color:inherit;
   background:none;
   border:none;
   margin-right:15px;
`
const StyledUploadImage = styled.img`
   height:40%;
`


const StyledLogo = styled.img`
   height:40px;
   max-width:100px;

`
const StyledMobileBurgerButton = styled.button`
   outline:none;
   color:inherit;
   background:none;
   border:none;
   cursor:pointer;
   height:100%;
   width:70px;
`
const StyledMobileBurgerButtonImg = styled.img`
   height: 40%;
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
   height:50%;
   width:110px;
   font-size:0.1rem;
   cursor:pointer;
   display:flex;
   flex-direction:row;
   justify-content:center;
   align-items:center;
   border-radius:2px;
   transition: all 0.2s;
   text-decoration: none;
   border:1px solid #6bbef2;
   // &:hover {
   //    background-color:${props => props.theme.primaryFontColor};
   // }
   

`
const StyledProfileImg = styled.img`
   height:50%;
   margin:auto auto;

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



export default Header