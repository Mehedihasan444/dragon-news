import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

import { useState } from 'react';
import { createContext } from 'react';
import auth from '../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)


const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}

const logOut =()=>{
return signOut(auth);
}

const logIn = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
}
useEffect(()=>{
 const unSubscribe = onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser);
});
return ()=>{
    unSubscribe();
}
},[])
const authInfo={
user,createUser,logOut,logIn
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;