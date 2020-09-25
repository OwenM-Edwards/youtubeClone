import React from 'react';
import styled from "styled-components";
import {useSelector} from 'react-redux';


const StyledIframe = styled.iframe`
   position:absolute;
   top:0;
   left:0;
   width:95%;
   height:100%;
`;


// Main video link view.
// Contains large video player along with title, channel and description information.
const VideoDetails = () => {
   const selectedVideo = useSelector(state=>state.selectedVideoID.video);
   if(!selectedVideo) return <div>Loading...</div>

   const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id}`

   return(
      <React.Fragment>
         <StyledIframe title="Video Player" src={videoSrc}/>
         <h4>{selectedVideo.snippet.title} - {selectedVideo.snippet.channelTitle}</h4>
         <p>{selectedVideo.snippet.channelTitle}</p>
         <p>{selectedVideo.snippet.description}</p>
      </React.Fragment>
   )
}; 


export default VideoDetails;