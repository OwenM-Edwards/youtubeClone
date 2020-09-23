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



const SignIn = () => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const history = useHistory();


   const handleUsernameChange = (event) => {
      setUsername(event)
   };
   
   const handlePasswordChange = (event) => {
      setPassword(event)
   };
   
   //SUBMIT SIGNIN DATA TO SERVER
   const handleSubmit = (event) => {
      fetch('https://zibbly-youtube-clone.herokuapp.com/signin', {
         method: 'post',
         headers: {'Content-Type' : 'application/json'},
         body: JSON.stringify({
            password: 'testing',
            username: 'testing',
            
         })
      })
      .then(res=> res.json())
      .then(data => {
         console.log(data);
      })
      event.preventDefault();
   };

   const switchToRegister = () => {
      history.push(`/register`);
   }

   return(
      <Wrapper>
         <StyledForm onSubmit={handleSubmit}>
            <StyledInputLabel for="userName">User Name:</StyledInputLabel><br/>
            <StyledInput id="userName" type="text" name="userName" minlength="6" maxlength="6" placeholder="Email or Username" required onChange={()=>handleUsernameChange()}/><br/>

            <StyledInputLabel for="password" value="Password" name="password">Password:</StyledInputLabel><br/>
            <StyledInput id="password" type="password" name="password" minlength="6" maxlength="6" placeholder="Password" required onChange={()=>handlePasswordChange()}/><br/>

            {/* submit sign in info */}
            <StyledInputSubmit type="submit" value="Sign In"/><br/>

            {/* Send to register */}
            <StyledButton onClick={switchToRegister} type="button" value="Create Account">Create Account</StyledButton>
         </StyledForm>
      </Wrapper>
   )
}


export default SignIn