import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const FirebaseProvider = ({children}) => {

    const[user, setUser] = useState(null)

    // create user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
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
        signInUser
    }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;