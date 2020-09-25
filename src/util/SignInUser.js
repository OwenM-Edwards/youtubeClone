// import axios from "axios";
// import {useSelector,useDispatch} from 'react-redux';

// export const signInUser = async (username, password) => {
//    const dispatch = useDispatch();
//    const history = useHistory();
//    const authenticated = useSelector(state=>state.authenticated.authenticated);
//    const user = useSelector(state=>state.authenticated.authenticated);

//    // If no user, return false.
//    if (!username){
//       return false;
//    }

//    const response = await axios.post(
//       "https://zibbly-youtube-clone.herokuapp.com/signin",
//       user
//    );

//    dispatch(userStore(response.data));
//    dispatch(authenticateUser(true));
//    localStorage.setItem('user', authenticated);
//    localStorage.setItem('authenticated', authenticated);
// };