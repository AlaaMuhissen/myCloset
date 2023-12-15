import React from 'react';
import { auth } from '../../config/firebase';
import { signInWithPopup, GoogleAuthProvider, linkWithPopup } from 'firebase/auth';

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

  const linkWithEmail = async () => {
    try {
      const result = await linkWithPopup(auth.currentUser, provider);
      // The user has been linked with Google provider
      console.log('Account linked with email/password:', result.user);
    } catch (error) {
      console.error('Error linking with email/password:', error);
    }
  };

  return (
    <div>
      <button onClick={signIn}>Google</button>
      <button onClick={linkWithEmail}>Link with Email/Password</button>
    </div>
  );
}
