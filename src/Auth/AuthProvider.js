import React, { createContext, useEffect, useState } from 'react';
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import app from '../firebase/firebase.config'


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const provider = new GoogleAuthProvider()
    const [user,setUser]=useState({})
    const [orders,setOrders] = useState([])


    const signUpNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateDisplayName = (name)=>{
        return updateProfile(auth.currentUser,{displayName : name})
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    const googleLogin=()=>{
        return signInWithPopup(auth,provider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
        })

        return ()=>{
            unsubscribe()
        }
    },[])

    const authInfo = {user,setUser,signUpNewUser,loginUser,updateDisplayName,logOut,googleLogin,setOrders,orders}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;