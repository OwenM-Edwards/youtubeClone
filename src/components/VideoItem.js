import React from 'react';
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import VideoThumbnail from 'react-video-thumbnail'
import { setCurrentVideo } from '../redux/actions';
import {useDispatch} from 'react-redux';


// Each video item is a thumbnail style link to a video. Shown in search list and as
// recommeded videos.
const VideoItem = ({ video }) =>{
   const dispatch = useDispatch();
   const history = useHistory();

   const videoName = video.filename;
   const handleClick = (event) => {
      dispatch(setCurrentVideo(video));
      history.push(`/watch/${video.filename}`);
   }

   return(
      <Wrapper onClick={()=> handleClick(video)} >
         <VideoThumbnail
            videoUrl={video.url}
            width={300}
            height={168}
         />
         <h1>test {videoName}</h1>
         {/* <StyledImg style={{marginRight:'20px'}} alt="thumbnail" src={video.snippet.thumbnails.medium.url}/> */}
         {/* <StyledH3>{video.snippet.title}</StyledH3> */}
      </Wrapper>
   )
}


const Wrapper = styled.div`
   max-height:168px;
   overflow:hidden;
   cursor:pointer;
   margin-bottom:30px;
   display:flex;
   flex-direction:row;
`


export default VideoItem;