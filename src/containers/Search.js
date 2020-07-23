import React, { useEffect }  from 'react';
import { SearchResults } from '../components';
import {useSelector,useDispatch} from 'react-redux';
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { setSearch } from '../redux/actions';


const Wrapper = styled.div`
   width:80%;
   height:100%;
   display:flex;
   flex-direction:column;
   margin: 0 auto;
`;


const Search = () => {
   const dispatch = useDispatch();
   const { searchstring } = useParams(); 

   useEffect(() => {
      dispatch(setSearch(searchstring));
      
   }, [dispatch,searchstring]);

   const currentSearchList = useSelector(state=>state.searchQuery.videos);
   const fetching = useSelector(state=>state.searchQuery.isFetching);


   if(fetching){
      return <h1>...Loading</h1>
   }
   if(!fetching && !currentSearchList.length){
      return <h1>Error</h1>
   }
   return(
      <Wrapper>
         {!fetching ? <SearchResults currentSearchList={currentSearchList}></SearchResults> : <React.Fragment></React.Fragment>}
         
      </Wrapper>
   )
}


export default Search;