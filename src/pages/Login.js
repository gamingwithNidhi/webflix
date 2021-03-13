import React , {useState ,useEffect} from 'react';
import './Login.css';
import SignIn from './SignIn'


function Login() {
const [signIn,setSignIn]=useState(false);

  return (
  <div className="Login">
  <div className="Login_background">
   <img className ="Login_logo"
      src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Sign in"
      />
    <button onClick ={() =>setSignIn(true) } className="Login_button">Sign in</button>
   <div className="Login_gradient"/>
   
    <div className="Login_body">  
    {signIn ? (<SignIn/>):(
      <>
           <h1>Unlimited movies, TV shows and more. DarkNinja</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
          <div className="Login_input">
          <form>
          <input className="Login_email" type="email" placeholder="Email Address"/>
          <button onClick={()=>setSignIn(true)} className="Login_getStarted">Get Started </button>
          </form>
      </div>
        </>
      )}
      
          
      
       </div>
   </div>
    </div>
  );
}
export default Login;
