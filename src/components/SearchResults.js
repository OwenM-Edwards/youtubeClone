import React from 'react';

import VideoItem from './VideoItem';

const SearchResults = ({ videos, onVideoSelect }) => {
   const listOfVideos = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/>)

   return (
      <React.Fragment>
         {listOfVideos}
      </React.Fragment>
   )
}

export default SearchResults;