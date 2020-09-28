import React, {useState} from 'react';
import styled from "styled-components";
import { LoadingIndicator } from '../components';
import {
   useHistory,
} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import { authenticateUser, userStore } from '../redux/actions';
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from 'react-promise-tracker';




// Handles sign in for user, on success sends user to their home page.
const SignIn = () => {
   const dispatch = useDispatch();
   const history = useHistory();
   // Username and password state from sign in form.
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const authenticated = useSelector(state=>state.authenticated.authenticated);

   const handleUsernameChange = (event) => {
      setUsername(event.target.value);
   };   
   const handlePasswordChange = (event) => {
      setPassword(event.target.value);
   };
   const { promiseInProgress } = usePromiseTracker();
   
   // Submit sign in information to server,
   // Fired from form submit.
   // If server return 200 status, log user data and send to home.
   const handleSubmit = async (event) => {
      event.preventDefault();
      const user = { username, password };
      // If no user, return false.
      if (!username){
         return false;
      }

      trackPromise(
         fetch('https://zibbly-youtube-clone.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
               password: password,
               username: username,
            })
         })
         .then(res=> {
            if(res.status === 200){
               res.json()
               .then(data=>{
                  console.log(data)
                  dispatch(authenticateUser(true));
                  localStorage.setItem('user', JSON.stringify(data));
                  localStorage.setItem('authenticated', true);
                  history.push(`/home`);
               })
               // dispatch(userStore(res.data));
               // dispatch(authenticateUser(true));
               // localStorage.setItem('user', JSON.stringify(res.data));
               // let test = localStorage.getItem("user");
               // console.log(JSON.stringify(res.data))
               // localStorage.setItem('authenticated', true);
               // history.push(`/home`);
            }
            else {
               dispatch(authenticateUser(false));
               history.push('/home');
            }
         })
      );
   };


   // Switch to create account screen.
   const switchToRegister = () => {
      history.push(`/register`);
   }

   // If wating on fetch, return loading indicator.
   if (promiseInProgress){
      return (
         <Wrapper>
            <LoadingIndicator>

            </LoadingIndicator>
         </Wrapper>
      )
   }
   else {
      return(
         <Wrapper>
            <StyledForm onSubmit={handleSubmit}>
               <StyledInputLabel for="userName">User Name:</StyledInputLabel><br/>
               <StyledInput id="userName" type="text" name="userName" minlength="6" maxlength="6" placeholder="Email or Username" required onChange={handleUsernameChange}/><br/>
   
               <StyledInputLabel for="password" value="Password" name="password">Password:</StyledInputLabel><br/>
               <StyledInput id="password" type="password" name="password" minlength="6" maxlength="6" placeholder="Password" required onChange={handlePasswordChange}/><br/>
   
               {/* submit sign in info */}
               <StyledInputSubmit type="submit" value="Sign In"/><br/>
   
               {/* Send to register */}
               <StyledButton onClick={switchToRegister} type="button" value="Create Account">Create Account</StyledButton>
            </StyledForm>
         </Wrapper>
      )
   }   
}


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


export default SignIn