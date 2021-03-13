import React from 'react';
import './App.css';
import Coordinate from './geolocation/Coordinate';
import SignIn from './pages/SignIn'

function App() {
  return (
    <div className="App">
    <Coordinate/>
    <SignIn/>
    <h1> </h1>
    </div>
  );
}

export default App;
