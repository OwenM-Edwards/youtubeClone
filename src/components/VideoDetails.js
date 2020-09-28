import React, {useEffect} from 'react';
import videojs from 'video.js';
import "video.js/dist/video-js.css";

const VideoDetails = ({video}) => {
   const videoName = video.filename;
   return(
      <React.Fragment>
         <h1>{videoName}</h1>
      </React.Fragment>
   )
}; 

export default VideoDetails;