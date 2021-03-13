import React, {useRef, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import './SignIn.css';
import {auth} from '../lib/firebase';

export default function SignIn() {
  const emailRef= useRef(null);
  const passwordRef=useRef(null);

   const signIn = (e)=>{
      e.preventDefault();
       auth.signInWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value 
        ).then((authUser)=>{
          console.log(authUser);
        }).catch((error)=>{
          alert(error.message);
        });
     };

        const register = (e) =>{
      e.preventDefault();
       auth.createUserWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value 
        ).then((authUser)=>{
          console.log(authUser);
        }).catch((error)=>{
          alert(error.message);
        });
     };
  return (
   <>
      <div className="LoginScreen_Header">
      <form>
       <h1>Sign In</h1>
        <input  ref={emailRef}  className ="LoginScreen_email" type ="email" placeHolder="Email"/>
        <input  ref={passwordRef} className ="LoginScreen_password" type="password" placeHolder="Password"/>
        <button className="LoginScreen_button" type ="submit" onClick={signIn} placeHolder="Sign In">Sign In</button>
   <h4>
        <span className="LoginScreen_NewToNetflix">New To DarkNinja?</span>
        <span className="LoginScreen_signupnow" onClick={register}>Sign Up now.</span>
        </h4>
      </form>
    </div>
    
    </>
  );
}
