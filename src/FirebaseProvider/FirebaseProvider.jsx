import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null)

    // social auth provider
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


const FirebaseProvider = ({children}) => {
    const[user, setUser] = useState(null)
    console.log(user);

    // create user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
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
        user
    }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;