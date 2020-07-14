import React from 'react';
import styled from "styled-components";

const StyledSidebar = styled.nav`
   position:fixed;
   height:100%;
   width:200px;
   z-index:1;
   top:5%;
   left:0;
   overflow-x:hidden;
   overflow-y:hidden;
   background-color: #1f1f1f;
   cursor: pointer;
   color: #e3e3e3;
   &:hover {
      overflow-y:scroll;
   }
`;


const Sidebar = () => {
   return(
      <StyledSidebar>This is the side bar</StyledSidebar>
   )
}
export default Sidebar