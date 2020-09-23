import React, {useState, useContext} from 'react';
import styled from "styled-components";
import { SearchBar} from '../components';
import {
   Link,
   useHistory,
} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import { authenticateUser } from '../redux/actions';


const Wrapper = styled.div`
   width:100%;
   height:100%;
   background-color:${props => props.theme.primaryBGColor};
   display:flex;
`


const Home = () => {
   return(
      <Wrapper>
         
      </Wrapper>
   )
}


export default Home