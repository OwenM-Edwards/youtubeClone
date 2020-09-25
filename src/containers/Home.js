import React, {useState, useContext} from 'react';
import styled from "styled-components";
import { SearchBar} from '../components';
import {
   Link,
   useHistory,
} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import { authenticateUser } from '../redux/actions';
import {Widget} from 'react-cloudinary-upload-widget';
import { CloudinaryContext } from 'cloudinary-react';
import { fetchVideos, openUploadWidget } from "../util/CloudinaryService";


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
// Main home page for user.
const Home = () => {
   const history = useHistory();

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


export default Home