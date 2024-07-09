import React, { createContext, useEffect, useState } from 'react'
import app from '../Firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginwithgoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleprovider)
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser)
            setUser(currentUser)
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, []);
    const authInfo = {
        user,
        createUser, loginwithgoogle, loading, login, logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider