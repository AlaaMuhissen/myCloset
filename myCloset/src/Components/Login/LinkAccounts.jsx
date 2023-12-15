// LinkAccounts.js
import React from 'react';
import LoginWithEmail from './LoginWithEmail';
import LoginWithGmail from './LoginWithGmail';
import { auth } from '../../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function LinkAccounts() {
  const handleLogout = () => {
    // Sign out the user
    auth.signOut()
      .then(() => {
        console.log('User signed out');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      console.log('User is signed in:', user);
    } else {
      // User is signed out
      console.log('User is signed out');
    }
  });
  return (
    <div>
      <h2>Link Accounts</h2>
      <LoginWithEmail />
      <LoginWithGmail />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
