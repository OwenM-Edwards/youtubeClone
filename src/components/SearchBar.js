import React from 'react'; 
import styled from "styled-components";
import { useHistory } from "react-router-dom";


// Main searchbar. Is located inside the header.
// On submit, sends user to seachResults.
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


const Wrapper = styled.div`
   max-width:900px;
   width:100%;
   margin:auto auto;
   display:flex;
   flex-direction:row;
   justify-content:center;
   height:100%;
   align-items:center;
   
`;
const StyledSearchBar = styled.input`
   width:70%;
   height:30px;
   line-height:35px;
   background:#121212;
   border:none;
   margin:0;
   border-right:none;
   font-weight:bold;
   color:#e3e3e3;
   padding-left:10px;
   font-size:1rem;
`;
const StyledSearchButton = styled.button` 
   height:32px;
   padding:5px;
   width:80px;
   background-color:#323232;
   border:none;
   border-radius:0px 5px 5px 0px;
   cursor:pointer;
`;
const StyledSearchImage = styled.img`
   height:100%;

`


export default SearchBar;