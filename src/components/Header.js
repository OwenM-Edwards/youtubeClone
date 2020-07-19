import React from 'react';
import styled from "styled-components";
import { SearchBar} from '../components';
import {
   Link,
} from "react-router-dom";


const StyledHeader = styled.header`
   flex-shrink: 0;
   width:100%;
   height:80px;
   background-color: #1f1f1f;
   display:flex;
   flex-direction:row;
   box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
   color:#e3e3e3;
   padding:10px;
   padding-top:20px;
   box-sizing: border-box;  
   z-index:2;
`;

const StyledLogo = styled.img`
   height:100%;
   position:relative;
   left:30px;
`;


const Header = () => {
   return(
      <StyledHeader>
         <h1>HEADER</h1>
         <Link style={{width:"0"}} to="/">
            <StyledLogo src={require('../img/test.png')}></StyledLogo>
         </Link>
         
         <SearchBar></SearchBar>

      </StyledHeader>
   )
}


export default Header