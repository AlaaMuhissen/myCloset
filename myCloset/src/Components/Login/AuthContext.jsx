// AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../../config/firebase';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const updateUser = (userData) => {
    setUser(userData);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Update user information in the context when authentication state changes
        updateUser({
          uid: user.uid,
          email: user.email,
          // Add other relevant user information
        });
      } else {
        // No user is signed in
        updateUser(null);
      }

      // Set loading to false once authentication state is determined
      setLoading(false);
    });

    return () => unsubscribe();
  }, [updateUser]);

  return (
    <AuthContext.Provider value={{ user, updateUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
