import React, {useEffect} from 'react';

import videojs from 'video.js';
import "video.js/dist/video-js.css";

// Main video link view.
// Contains large video player.
const VideoPlayer = ({video}) => {
   const videoUrl  = video.url; 
   let videoRef;


   useEffect(() => {
      const player = videojs(videoRef);   
      player.src(videoUrl)

      return () => {
         player.dispose();
      };
   }, );
      
   return(
      <React.Fragment>
         <div data-vjs-player>
            <video 
               controls
               className="video-js vjs-fluid vjs-big-play-centered"
               ref={(node) => (videoRef = node)}
               style={{width:"100%"}}
            />
         </div>
      </React.Fragment>
   )
}; 


export default VideoPlayer;