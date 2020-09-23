import React, {useState, useContext} from 'react';
import styled from "styled-components";
import { SearchBar} from '../components';
import {
   Link,
   useHistory,
} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import { authenticateUser } from '../redux/actions';


const Wrapper = styled.div`
   width:100%;
   height:100%;
   background-color:${props => props.theme.primaryBGColor};
   display:flex;
`
const StyledForm = styled.form`
   background-color:${props => props.theme.secondBGColor};
   height:200px;
   padding:90px 40px;
   width:400px;
   color:${props => props.theme.primaryFontColor};
   margin:auto auto;
   display:flex;
   justify-content:center;
   flex-direction:column;
   align-items:center;
   border-radius:5px;

`
const StyledInputLabel = styled.label`
   display:none;
`
const StyledInput = styled.input`
   width:80%;
   box-sizing: border-box; 
   border-radius:2px;
   padding: 14px 10px;
   margin-bottom:10px;
   margin-top:10px;
`
const StyledInputSubmit = styled.input`
   width:80%;
   margin:0 auto;
   border: none;
   box-sizing: border-box; 
   padding: 14px 20px;
   margin-bottom:10px;
   margin-top:10px;
   border-radius:5px;
   cursor: pointer;
   transition: all 0.2s;

   &:hover {
      background-color:#b3b3b3;
   }
`

const StyledButton = styled.button`
   width:80%;
   margin:0 auto;
   border: none;
   box-sizing: border-box; 
   padding: 14px 20px;
   margin-bottom:10px;
   margin-top:10px;
   border-radius:5px;
   cursor: pointer;
   transition: all 0.2s;

   &:hover {
      background-color:#b3b3b3;
   }
`




const Register = () => {
   const [userName, setUserName] = useState('');
   const [password, setPassword] = useState('');
   const [email, setEmail] = useState('');
   const history = useHistory();



   const handleUserNameChange = (event) => {
      setUserName(event);
   };
   
   const handlePasswordChange = (event) => {
      setPassword(event);
   };

   const handleEmailChange = (event) => {
      setEmail(event);
   };


   //Submit register data to server
   const handleSubmit = (event) => {
      fetch('https://zibbly-youtube-clone.herokuapp.com/register', {
         method: 'post',
         headers: {'Content-Type' : 'application/json'},
         body: JSON.stringify({
            username: userName,
            email:email,
            password: password,
         })
      })
      .then(res=> res.json())
      .then(data => {
         // send to homepage
      })
      event.preventDefault();
   };

   const switchToSignIn = () => {
      history.push(`/signIn`);
   }



   return(
      <Wrapper>
         <StyledForm onSubmit={()=>handleSubmit()}>
            {/* Username */}
            <StyledInputLabel for="userName">User Name:</StyledInputLabel><br/>
            <StyledInput id="userName" type="text" name="userName" placeholder="Username" onChange={()=>handleUserNameChange()}/><br/>

            {/* Email */}
            <StyledInputLabel for="email">Email:</StyledInputLabel><br/>
            <StyledInput id="email" type="text" name="email" placeholder="Email" onChange={()=>handleEmailChange()}/><br/>

            {/* Password  */}
            <StyledInputLabel for="password" value="Password" name="password">Password:</StyledInputLabel><br/>
            <StyledInput required id="password" type="password" name="password" placeholder="Password" onChange={()=>handlePasswordChange()}/><br/>

            {/* Submit register info */}
            <StyledInputSubmit type="submit" value="Create Account"/><br/>

            {/* Switch to sign in */}
            <StyledButton onClick={switchToSignIn} type="button" value="Create Account">Sign In</StyledButton>
         </StyledForm>
      </Wrapper>
   )
}


export default Register