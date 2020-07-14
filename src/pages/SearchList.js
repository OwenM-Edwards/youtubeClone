import React from 'react';
import { useLocation } from 'react-router';
import { SearchResults } from '../components/';
import styled from "styled-components";

const Wrapper = styled.div`
   width:80%;
   height:100%;
   display:flex;
   flex-direction:column;
   margin: 0 auto;
`;

const SearchList = () => {
   let props = useLocation();
   return(
      <Wrapper>
         <SearchResults videos={props.watchProps.videos} onVideoSelect={props.watchProps.onVideoSelect}></SearchResults>
      </Wrapper>
   )
}

export default SearchList;