import React from 'react';
import styled from "styled-components";
import { useHistory } from "react-router-dom";


const Wrapper = styled.div`
   width:100%;
   height:200px;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   grid-template-rows: 1fr;
   gap: 10px 10px;
   grid-template-areas: "vid text text text";
   cursor:pointer;
`
const StyledImg = styled.img`
   width:100%;
   grid-area: vid;
`
const StyledH3 = styled.h3`
   width:100%;
   grid-area: text;
`


// Each video item is a thumbnail style link to a video. Shown in search list and as
// recommeded videos.
const VideoItem = ({ video }) =>{
   const history = useHistory();

   const handleClick = (event) => {
      history.push(`/watch/${event.id.videoId}`);
   }

   return(
      <Wrapper onClick={()=> handleClick(video)} >
         <StyledImg style={{marginRight:'20px'}} alt="thumbnail" src={video.snippet.thumbnails.medium.url}/>
         <StyledH3>{video.snippet.title}</StyledH3>
      </Wrapper>
   )
}


export default VideoItem;