import React from 'react';
import { auth } from '../../config/firebase';
import { signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { FaGoogle } from "react-icons/fa";

export default function LoginWithGmail() {
  const provider = new GoogleAuthProvider();

  const signIn = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user.email);
      })
      .catch((error) => {
        console.error('Error signing in with Google:', error);
      });
  };

  return (
    <div>
      <button onClick={signIn}><FaGoogle color='#704F38' size={"25px"}/></button>  
    </div>
  );
}
