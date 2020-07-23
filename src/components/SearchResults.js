import React from 'react';
import VideoItem from './VideoItem';


const SearchResults = ({currentSearchList}) => {

   return (
      <React.Fragment>
         {currentSearchList?.map((video, id) => (
               <VideoItem key={id} video={video}/>
            ))}
      </React.Fragment>
   )
}


export default SearchResults;