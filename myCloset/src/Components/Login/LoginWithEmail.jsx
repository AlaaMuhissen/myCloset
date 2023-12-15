import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, linkWithPopup, EmailAuthProvider } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { useNavigate} from 'react-router-dom';

export default function LoginWithEmail() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const signIn = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
        navigate('/dashboard');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const linkWithGoogle = async () => {
    const provider = new EmailAuthProvider(); // You can use EmailAuthProvider to link with email/password
    try {
      const result = await linkWithPopup(auth.currentUser, provider);
      // The user has been linked with email/password provider
      console.log('Account linked with Google:', result.user);
    } catch (error) {
      console.error('Error linking with Google:', error);
    }
  };

  return (
    <div>
      <input type="url" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="*******" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={signIn}>Login</button>
      <button onClick={linkWithGoogle}>Link with Google</button>
    </div>
  );
}
