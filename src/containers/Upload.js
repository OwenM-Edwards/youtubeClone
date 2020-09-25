import React, {useState, useContext} from 'react';
import styled from "styled-components";
import { SearchBar} from '../components';
import {
   Link,
   useHistory,
} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import { authenticateUser } from '../redux/actions';
import {Widget} from 'react-cloudinary-upload-widget';
import { CloudinaryContext } from 'cloudinary-react';
import { fetchVideos, openUploadWidget } from "../util/CloudinaryService";


const Wrapper = styled.div`
   width:100%;
   // background-color:${props => props.theme.primaryBGColor};
   display:flex;
   flex-direction:row;
   flex-wrap:wrap;
   justify-content:space-between;
   flex-direction:row;
   align-items:center;
   padding:20px;
`




// Main home page for user.
const Upload = () => {
   const [homeVideoList, setHomeVideoList] = useState([]);
   const [videos, setVideos] = useState([]);
   const tag = 'user'
   const beginUpload = tag => {
      const uploadOptions = {
         cloudName: "zibbly",
         tags:[tag],
         uploadPreset: "youtubeClone",
         sources: ['local'],
      };
   
      openUploadWidget(uploadOptions, (error, photos) => {
         if (!error) {
            console.log(photos);
            if (photos.event === 'succes'){
               setVideos([...videos, photos.info.public_id])
            }
         } else {
            console.log(error);
         }
      })
   }


   return(
      <CloudinaryContext>
         <Wrapper>
            <button onClick={() => beginUpload()}>Upload Video</button>
         </Wrapper>
      </CloudinaryContext>
   )
}


export default Upload