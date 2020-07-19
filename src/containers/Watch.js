import React from 'react';
import { SearchResults,VideoDetails } from '../components/';
import { useLocation } from 'react-router';
import {useSelector} from 'react-redux';

import styled from "styled-components";

const Wrapper = styled.div`
   width:100% ;
   max-height:100%;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
   grid-template-rows: 1fr;
   gap: 1px 1px;
   grid-template-areas: "StyledVideoDetails StyledVideoDetails StyledVideoDetails StyledVideoDetails StyledSearchResultsSide";
`;

const StyledVideoDetails = styled.div`
   grid-area: StyledVideoDetails;
   position:relative;
   width:100%;
   height:0;
   padding-top:60%;
`;
const StyledSearchResults = styled.div`
   width:100%;
   height:100%;
   display:flex;
   flex-direction:column;
`;
const StyledSearchResultsSide = styled.div`
   width:100%;
   height:100%;
   display:flex;
   flex-direction:column;
   grid-area: StyledSearchResultsSide;
`;


const Watch = () => {
   // const { searchString } = useParams(); 
   const currentSearchList = useSelector(state=>state.searchQuery);
   const selectedVideo = useSelector(state=>state.selectedVideo);

   console.log(selectedVideo)
   return(
      <Wrapper>
         <h1>THIS IS WATCH</h1>
         {selectedVideo ? <StyledVideoDetails><VideoDetails></VideoDetails></StyledVideoDetails> : <React.Fragment/>}

         {/* {selectedVideo ? 
            <StyledSearchResultsSide><SearchResults></SearchResults> </StyledSearchResultsSide>
            : 
            <StyledSearchResults>
               <SearchResults></SearchResults>
            </StyledSearchResults>
         } */}
      </Wrapper>
   )
}

export default Watch;
