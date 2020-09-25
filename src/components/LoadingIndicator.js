import React, {useState, useContext} from 'react';
import styled from "styled-components";
import Loader from 'react-loader-spinner';


const StyledLoadingDiv = styled.div`
   margin:auto auto;
   display:flex;
   justifyContent:center;
   alignItems:center;
`


// Handles sign in for user, on success sends user to their home page.
const LoadingIndicator = () => {
   return (
      <StyledLoadingDiv>   
         <Loader type="ThreeDots" color="red" height="100" width="100"></Loader>
      </StyledLoadingDiv>
   )
}


export default LoadingIndicator;