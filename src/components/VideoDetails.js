import React from 'react';
import styled from "styled-components";
const StyledIframe = styled.iframe`
   position:absolute;
   top:0;
   left:0;
   width:95%;
   height:100%;
`;

const VideoDetails = ({ video }) => {
   if(!video) return <div>Loading...</div>

   const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

   return(
      <React.Fragment>
         <StyledIframe title="Video Player" src={videoSrc}/>
         <h4>{video.snippet.title} - {video.snippet.channelTitle}</h4>
         <p>{video.snippet.channelTitle}</p>
         <p>{video.snippet.description}</p>
      </React.Fragment>
   )
};

export default VideoDetails;