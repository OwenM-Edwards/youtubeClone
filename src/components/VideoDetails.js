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


const VideoDetails = () => {
   const selectedVideo = useSelector(state=>state.selectedVideo);
   if(!selectedVideo) return <div>Loading...</div>

   const videoSrc = `https://www.youtube.com/embed/${selectedVideo.payload.id.videoId}`

   return(
      <React.Fragment>
         <StyledIframe title="Video Player" src={videoSrc}/>
         <h4>{selectedVideo.payload.snippet.title} - {selectedVideo.payload.snippet.channelTitle}</h4>
         <p>{selectedVideo.payload.snippet.channelTitle}</p>
         <p>{selectedVideo.payload.snippet.description}</p>
      </React.Fragment>
   )
};


export default VideoDetails;