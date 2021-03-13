import React , {useState ,useEffect} from 'react';
import { BrowserRouter as Router,Switch,Route,Link,useRouteMatch,useParams} from 'react-router-dom';
import './App.css';
import SignIn from './pages/SignIn';
import OtpPage from './pages/OtpPage';
import {login,logout,selectUser} from "./features/userSlice";
import {Provider, useDispatch,useSelector} from "react-redux";
 import {auth} from './lib/firebase';
 import Home from './pages/Home.js';



import Coordinate from './geolocation/Coordinate';



function App() {

	const user =useSelector(selectUser);

const dispatch = useDispatch();

		useEffect(()=>{
const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
  if(userAuth){
          console.log(userAuth);
          dispatch(
            login({
          uid:userAuth.uid,
          email:userAuth.email
           })
            );
 }else{
    dispatch(logout);
  }
});
return unsubscribe;
},[]);

    return (
    <Router>
    { !user ? (
      <SignIn/>
   
      ):(
      <div>

        <Switch>
          <Route excat path="/">
           <Home />
          </Route>
             </Switch>
          
      </div>
       )}
    </Router>
  );
}

export default App;
