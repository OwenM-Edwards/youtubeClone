import React, { useEffect } from 'react';
import { SearchResults } from '../components/';
import {useSelector} from 'react-redux';
import styled from "styled-components";

const Wrapper = styled.div`
   width:80%;
   height:100%;
   display:flex;
   flex-direction:column;
   margin: 0 auto;
`;

const SearchList = () => {
   const currentSearchList = useSelector(state=>state.searchQuery);

   return(
      <Wrapper>
         {currentSearchList ? <SearchResults></SearchResults> : <React.Fragment></React.Fragment>}
         
      </Wrapper>
   )
}

export default SearchList;