import React, {useRef, useState } from 'react';
import './OtpPage.css';
import {auth} from '../lib/firebase';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';



export default function OtpPage() {

  const NumberRef= useRef(null);
  const UserRef= useRef(null);
  const [confirm, setConfirm] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
   const history = useHistory();

  const sendOtp = (e)=>{
      e.preventDefault();
       auth.signInWithPhoneNumber(
          NumberRef.current.value 
        ).then((authUser)=>{
          console.log(authUser);
          history.push(ROUTES.HOME);
        }).catch((error)=>{
          alert(error.message);
        });
     };

 const  confirmVerificationCode = (code) => {
  try {
     confirm.confirm(code);
    setConfirm(null);
  } catch (error) {
    alert('Invalid code');
  }
}

 const authenticateOtp = (e)=>{
      e.preventDefault();
       auth.onAuthStateChanged(
          UserRef.current.value
        ).then((authUser)=>{
        setAuthenticated(true);
        }).catch((error)=>{
           setAuthenticated(false);
        });
     };
  return (
  	<>
  	{!confirm?(
 				
 	<form className="otp_Panel">
 	<div className="otp_india">
 	<img className="otp_india_img" src="https://images.urbanclap.com/image/upload//t_low_res_template/v1514444369/Flag_of_India_28Dec2017-1.png"/>
 	<p>INDIA</p>
 	<span>+91</span>
 	</div>
  	 <input ref={NumberRef} className="Otp_Number" type="text" name="name" placeholder="Your phone number" />
	<button className ="Otp_button" onSubmit={sendOtp}>Send OTP</button>
	</form> 

  		):(
	<form className="otp_validation_Panel">
  	 <input className="Otp_Number" type="text" name="name" placeholder="OTP Number" />
	<button className ="Otp_button" onSubmit={confirmVerificationCode}>Validate OTP</button>
	</form> 
  		)}
 
 </>
  );
}
