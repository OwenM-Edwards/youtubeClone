import React, { useEffect } from 'react';
import { SearchResults,VideoDetails } from '../components/';
import {useSelector, useDispatch} from 'react-redux';
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { setSearch,setSearchById } from '../redux/actions';


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
const StyledSearchResultsSide = styled.div`
   width:100%;
   height:100%;
   display:flex;
   flex-direction:column;
   grid-area: StyledSearchResultsSide;
`;


const Watch = () => {
   const dispatch = useDispatch();
   const { videoId } = useParams(); 
   const selectedVideo = useSelector(state=>state.selectedVideoID.video);
   const sideList = useSelector(state=>state.searchQuery.videos.slice(1));

   useEffect(() => {
      dispatch(setSearchById(videoId));

   }, [dispatch,videoId]);

   useEffect(() => {
      if(selectedVideo){
         dispatch(setSearch(selectedVideo.snippet.title));
      }
   }, [dispatch,selectedVideo]);


   return(
      <Wrapper>
         <h1>test</h1>
         <StyledVideoDetails> <VideoDetails></VideoDetails> </StyledVideoDetails>

         {sideList ? <StyledSearchResultsSide> <SearchResults currentSearchList={sideList}></SearchResults> </StyledSearchResultsSide> : <React.Fragment></React.Fragment>}
         
      </Wrapper>
   )
}


export default Watch;
