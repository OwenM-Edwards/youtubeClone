import React from 'react';
import styled from "styled-components";


// Main home page for user.
const Home = () => {
   return(
      <Wrapper>
         <StyledDummyVideo/>
         <StyledDummyVideo/>
         <StyledDummyVideo/>
         <StyledDummyVideo/>
         <StyledDummyVideo/>
         <StyledDummyVideo/>
         <StyledDummyVideo/>
         <StyledDummyVideo/>
         <StyledDummyVideo/>
         <StyledDummyVideo/>
         <StyledDummyVideo/>
         <StyledDummyVideo/> 
      </Wrapper>
   )
}


const Wrapper = styled.div`
   width:100%;
   // background-color:${props => props.theme.primaryBGColor};
   display:flex;
   flex-direction:row;
   flex-wrap:wrap;
   justify-content:space-between;
   flex-direction:row;
   align-items:center;
   padding:20px;
`
const StyledDummyVideo = styled.div`
   width:400px;
   height:200px;
   background-color:red;
   margin:10px;
   min-height:200px;
`


export default Home