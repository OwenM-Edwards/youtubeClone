import React, {useState,useEffect} from 'react';
import styled from "styled-components";
import { SearchBar} from '../components';
import youtube from '../api/youtube';
import { useHistory } from "react-router-dom";
import {
   Link,
} from "react-router-dom";

const StyledHeader = styled.header`
   flex-shrink: 0;
   width:100%;
   height:80px;
   background-color: #1f1f1f;
   display:flex;
   flex-direction:row;
   box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
   color:#e3e3e3;
   padding:10px;
   padding-top:20px;
   box-sizing: border-box;  
   z-index:2;
`;

const StyledLogo = styled.img`
   height:100%;
   position:relative;
   left:30px;
`;



const Header = () => {
   const [ selectedVideo, setSelectedVideo ] = useState(null);
   const [ videos, setVideos ] = useState([]);
   let history = useHistory();

   useEffect(()=>{
      if(videos.length > 0 && selectedVideo){
         history.push({
            pathname:'/watch', 
            watchProps:{
               videos:videos,
               selectedVideo:selectedVideo,
               onVideoSelect:setSelectedVideo
            }
         });
      }
      else if(videos.length > 0 && !selectedVideo) {
         history.push({
            pathname:'/search', 
            watchProps:{
               videos:videos,
               selectedVideo:selectedVideo,
               onVideoSelect:setSelectedVideo
            }
         });
      }
   });

   const handleSubmit = async (searchTerm) => {
      const response = await youtube.get('search', { 
         params: {
            part: 'snippet',
            maxResults: 5,
            key: 'AIzaSyChmmFF1_eI9QnAvb1VTb88zjWTC8PkUG0',
            q: searchTerm,
         }
      })
      console.log(response);
      setVideos(response.data.items);
      setSelectedVideo(null);
   }

   return(
      <StyledHeader>
         <Link style={{width:"0"}} to="/">
            <StyledLogo src={require('../img/test.png')}></StyledLogo>
         </Link>
         
         <SearchBar onFormSubmit={handleSubmit}></SearchBar>

      </StyledHeader>
   )
}

export default Header