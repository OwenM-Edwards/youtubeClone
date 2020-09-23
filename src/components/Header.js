import React, {useState, useContext} from 'react';
import styled from "styled-components";
import { SearchBar} from '../components';
import {
   Link,
} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import { authenticateUser } from '../redux/actions';
import profileImg from '../img/user.png';


const StyledHeader = styled.header`
   flex-shrink: 0;
   width:100%;
   height:80px;
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
   height:100%;
   position:relative;
   left:30px;
`

const StyledProfileButtonLoggedIn = styled.button`
   background-color:orange;
   z-index:2;
   border-radius:100%;
   position:relative;
   width:60px;
   height:60px;
   bottom:10px;
   cursor:pointer;
`

const StyledProfileButtonLoggedOut = styled.button`
   background-color:${props => props.theme.primaryBGColor};
   color:${props => props.theme.primaryFontColor};
   border-color:${props => props.theme.primaryFontColor};
   z-index:2;
   position:relative;
   width:140px;
   height:60px;
   bottom:10px;
   cursor:pointer;
   display:flex;
   padding:10px;
   justify-content:center;
   align-items:center;
   border-radius:5px;
   transition: all 0.2s;

   &:hover {
      background-color:${props => props.theme.primaryFontColor};
   }

`

const StyledProfileTab = styled.div`
   background-color:red;
   position:relative;
   z-index:-1;
   position:absolute;
   width:140px;
   height:300px;
   top:70px;
   right:10px;
   text-align:center;
`
const StyledProfileImg = styled.img`
   height:80%;
   padding-right:10px;

`


const Header = () => {
   const dispatch = useDispatch();
   const [profileTabState, setProfileTabState] = useState(false);
   const authenticated = useSelector(state=>state.authenticated.authenticated);
   console.log(authenticated);

   const loginUser = (state) => {
      dispatch(authenticateUser(state));
   }

   return(
      <StyledHeader>
         
         <Link style={{width:"0"}} to="/">
            <StyledLogo src={require('../img/test.png')}></StyledLogo>
         </Link>
         
         <SearchBar/>

         <React.Fragment>
            {authenticated 
               ? <StyledProfileButtonLoggedIn onClick={()=>profileTabState? setProfileTabState(false):setProfileTabState(true) }/>
               : <Link to="/signIn">
                     <StyledProfileButtonLoggedOut onClick={()=>profileTabState? setProfileTabState(false):setProfileTabState(true) }>
                        <StyledProfileImg src={profileImg}/>
                        <p style={{fontSize:"18px",color:"#E3E3E3"}}>SIGN IN</p>
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


export default Header