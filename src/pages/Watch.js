import React, { useState, useEffect } from 'react';
import { SearchResults,VideoPlayer,VideoDetails } from '../components/';
import {useSelector,useDispatch} from 'react-redux';
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { setCurrentVideo, setSearch } from '../redux/actions';


const Watch = () => {
   const dispatch = useDispatch();
   const { videoId } = useParams();
   const [isFetching, setisFetching] = useState(true);
   const currentSearchList = useSelector(state=>state.searchQuery.videos);
   const currentVideo = useSelector(state=>state.currentVideo.video);

   useEffect(()=> {
      fetch(`https://zibbly-youtube-clone.herokuapp.com/search/${videoId}`, {
         method: 'get',
         headers: {'Content-Type' : 'application/json'},
      })
      .then(response => {
         if(response.status === 200){
            response.json()
            .then(res=> {
               // setNewList(res.resources.slice(1));
               // setVideo(res.resources[0].url)

               dispatch(setCurrentVideo(res.resources[0]));
               dispatch(setSearch(res.resources.slice(1)));
               setisFetching(false);
            })
         }
      })
      .catch(err=>{
         console.log('err')
         setisFetching(false);
      });
   },[videoId])


   if (isFetching === true ) {
      return(
         <Wrapper>

         </Wrapper>
      )
   }
   else {
      return(
         <Wrapper>
            <StyledVideoContainer>
               <StyledVideoPlayer> <VideoPlayer video={currentVideo}></VideoPlayer> </StyledVideoPlayer>

               <StyledVideoDetails> <VideoDetails video={currentVideo}></VideoDetails> </StyledVideoDetails>
            </StyledVideoContainer>


            <StyledSearchResultsSide> <SearchResults currentSearchList={currentSearchList}></SearchResults> </StyledSearchResultsSide> 
            
         </Wrapper>
      )
   }
}


const Wrapper = styled.div`
   width:100%;
   height:100%;
   display:flex;
   flex-direction:row;
   padding:20px;
`;

const StyledVideoContainer = styled.div`
   width:75%;
   height:100%;
   background-color:pink;
   display:flex;
   flex-direction:column;
   margin-right:20px;
`;
const StyledSearchResultsSide = styled.div`
   width:25%;
`;

const StyledVideoPlayer = styled.div`
   width:100%;
   background-color:blue;
`;
const StyledVideoDetails = styled.div`
   width:100%;
   height:100%;
   background-color:red;

`;


export default Watch;
