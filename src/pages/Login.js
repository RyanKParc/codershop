import { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth';

import googleLogo from '../assets/google_logo.png'

import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../firebase/firebase.config";

import SignupForm from '../components/SignupForm';

// const auth = getAuth();

// getRedirectResult(auth)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access Google APIs.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;

//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });


// signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });


const Login = () => {

  useEffect(() => {
    (async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    })();
  }, []);

  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
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