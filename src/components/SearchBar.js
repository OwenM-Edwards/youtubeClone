import React from 'react'; 
import styled from "styled-components";
import { useHistory } from "react-router-dom";


const Wrapper = styled.div`
   max-width:900px;
   width:50%;
   margin:auto auto;
   display:flex;
   flex-direction:row;
`;
const StyledSearchBar = styled.input`
   width:90%;
   height:35px;
   line-height:35px;
   background:#121212;
   border:1px solid #303030;
   margin:0;
   border-right:none;
   font-weight:bold;
   padding:5px;
   color:#e3e3e3;
   padding-left:20px;
   font-size:1.2rem;
`;
const StyledSearchButton = styled.button` 
   height:47px;
   padding:5px;
   width:80px;
   margin-right:auto;
   background-color:#323232;
   border:none;
   border-radius:0px 5px 5px 0px;
   cursor:pointer;
`;
const StyledSearchImage = styled.img`
   height:100%;
`


const SearchBar = () => {
   const history = useHistory();
   
   const handleSearch = (event) => {
      if(event.key === "Enter") {
         //if searchterm entered do this, otherwise do nothing.
         if(event.target.value.trim()){
            history.push(`/search/${event.target.value}`);
         }
      }
   }

   return(
      <Wrapper>
         <StyledSearchBar onKeyPress={handleSearch} type="text" placeholder="Search..">
         </StyledSearchBar>
         <StyledSearchButton  containerStyle ={{backgroundColor: 'transparent'}} ><StyledSearchImage src={require('../img/search.png')}></StyledSearchImage></StyledSearchButton>
      </Wrapper>
   )
}


export default SearchBar;