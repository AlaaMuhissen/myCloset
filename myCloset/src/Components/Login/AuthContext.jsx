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
        updateUser({
          uid: user.uid,
          email: user.email,
        });
      } else {
        updateUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, updateUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
