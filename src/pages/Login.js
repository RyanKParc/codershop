import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getRedirectResult } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/coderSlice';
import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../api/firebase.config";
import googleLogo from '../assets/google_logo.png'
import SignupForm from '../components/SignupForm';

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    })();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    dispatch(
      addUser({
        _id: user.uid,
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
      }))
    setTimeout(() => {
      navigate("/")
    }, 1500)
  }

  return (
    <div className='login page'>
      <div onClick={logGoogleUser} className='loginbtn'>
        <img className='googlelogo' src={googleLogo} alt="" />
        <p>Sign In with Google</p>
      </div>
      <div onClick={signInWithGoogleRedirect} className='loginbtn'>
        <img className='googlelogo' src={googleLogo} alt="" />
        <p>Sign In with Redirect</p>
      </div>
      <SignupForm />
    </div>
  )
}

export default Login