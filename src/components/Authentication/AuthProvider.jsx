import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

export const authContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading]= useState(true);

    const registerUser = (email, pass) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass);
      };
      const loginUser = (email, pass) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
      };

      const logOut = () => {
        setLoading(true);
        setUser(null);
        return signOut(auth);
      };

      const profileUpdate = (name, image) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: image,
        });
      };

      useEffect(() => {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false);
          return () => {
            unsubscribe();
          };
        });
      }, []);


    const shareTools = {registerUser,profileUpdate,loginUser,logOut,loading,setLoading,user,setUser};
    return (
        <authContext.Provider value={shareTools}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;