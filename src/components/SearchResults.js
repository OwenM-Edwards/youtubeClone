import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import VideoItem from './VideoItem';


const SearchResults = () => {
   const currentSearchList = useSelector(state=>state.searchQuery.payload);


   const listOfVideos = currentSearchList.map((video, id) => <VideoItem key={id} video={video}/>)
   return (
      <React.Fragment>
         {listOfVideos} 
      </React.Fragment>
   )
}

export default SearchResults;