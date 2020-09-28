import React, {useState} from 'react';
import styled from "styled-components";
import {
   useHistory,
} from "react-router-dom";
import {useDispatch} from 'react-redux';
import { CloudinaryContext } from 'cloudinary-react';
import { openUploadWidget } from "../util/CloudinaryService";





// Main home page for user.
const Upload = () => {
   const history = useHistory();
   const [videos, setVideos] = useState([]);
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
               setVideos([...videos, photos.info.public_id]);
               history.push(`/home`);
            }
         } else {
            console.log(error);
         }
      })
   }

   // const search = () => {
   //    fetch('https://zibbly-youtube-clone.herokuapp.com/search', {
   //       method: 'post',
   //       headers: {'Content-Type' : 'application/json'},
   //       body:JSON.stringify({
   //          search:'test'
   //       })
   //    })
   //    .then(response => {
   //       if(response.status === 200){
   //          response.json()
   //          .then(res=> {
               
   //             if(response.status === 200){
   //                // console.log(res.resources[0].url)
   //                dispatch(setCurrentVideo(res.resources[0].url));
   //             }
   //             else {

   //             }
   //          })
   //       }
   //    })
   //    .catch(err=>{
   //       console.log('err')
   //    })
   // }


   return(
      <CloudinaryContext>
         <Wrapper>
            <button onClick={() => beginUpload()}>Upload Video</button>
         </Wrapper>
      </CloudinaryContext>
   )
}


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


export default Upload