import React, { useState, useEffect }  from 'react';
import { SearchResults, LoadingIndicator } from '../components';
import {useSelector,useDispatch} from 'react-redux';
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { setSearch } from '../redux/actions';
import { trackPromise } from 'react-promise-tracker';


const Search = () => {
   const dispatch = useDispatch();
   const { searchstring } = useParams(); 
   const currentSearchList = useSelector(state=>state.searchQuery.videos);
   const [fetching, setFetching] = useState(true);

   useEffect(() => {
      setFetching(true);
      trackPromise(
         fetch(`https://zibbly-youtube-clone.herokuapp.com/search/${searchstring}`, {
            method: 'get',
            headers: {'Content-Type' : 'application/json'},
         })
         .then(res=>{
            if(res.status === 200){
               res.json().then(data => {
                  dispatch(setSearch(data));
                  setFetching(false);
                  // console.log(data)
               })
               
               // dispatch(userStore(res.data));
               // dispatch(authenticateUser(true));
               // localStorage.setItem('user', authenticated);
               // localStorage.setItem('authenticated', authenticated);
               // history.push(`/home`);
            }
            else {
               // dispatch(authenticateUser(false));
               // history.push('/home');
            }
         })
            
      );
   }, [dispatch, searchstring]);


   if(fetching){
      return (
         <LoadingWrapper><LoadingIndicator/></LoadingWrapper>
      )
   }
   if(!fetching && !currentSearchList.length){
      return <h1>Error</h1>
   }
   else {
      return(
         <Wrapper>
            <SearchResults currentSearchList={currentSearchList}></SearchResults>
         </Wrapper>
      )
   }

}


const Wrapper = styled.div`
   width:862px;
   height:100%;
   display:flex;
   flex-direction:column;
   justify-content:flex-start;
   margin:0 auto;
   margin-top:100px;
`;

const LoadingWrapper = styled.div`
   width:100%;
   margin:auto auto;
   display:flex;
   flex-direction:row;
   justify-content:center;
   height:200px;
   align-items:center;
`;


export default Search;