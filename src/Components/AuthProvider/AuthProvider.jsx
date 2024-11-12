import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import {auth} from '../../firebase.init'

export const AuthContex =createContext(null)
const AuthProvider = ({children}) => {
   const [user,setuser]=useState(null)
   const [loading,setloading]=useState(true)
    const get="connected successfully"
    const name="Contex Api"
    const googleprovider =new GoogleAuthProvider()
    const createUser =(email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser =(email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signOutUser =()=>{
        setloading(true)
        return signOut(auth)
    }
    const signInWithGoogle =()=>{
        setloading(true)
        return signInWithPopup(auth,googleprovider)
    }
    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth,currentUser=>{
          console.log('currentUser',currentUser);
           setuser(currentUser)
           setloading(false)
       })
       return ()=>{
        unsubscribe()
       }
    },[])

    const authInfo ={
     get,
     name,
     user,
     createUser,
     signInUser,
     signInWithGoogle,
     signOutUser,
     loading
   }

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;