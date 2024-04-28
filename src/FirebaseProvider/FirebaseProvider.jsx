import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null)

    // social auth provider
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


const FirebaseProvider = ({children}) => {
    const[user, setUser] = useState(null)

    // create user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user profile
    const updateUserProfile = (name, image) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image
          })
    }

    // sign in user
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    // github login
    const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider)
    }

    // logout
    const logout = () =>{
        setUser(null)
        signOut(auth)
    }


    // observer
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } 
          });
    },[])

    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logout,
        user,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;