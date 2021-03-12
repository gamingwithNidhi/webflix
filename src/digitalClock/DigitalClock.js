import React,{useState} from 'react';
import './DigitalClock.css';

const DigitalClock=() =>{

	let time =  new Date().toLocaleTimeString();
	const [cTime,Utime] =useState(time);

	const UpdateTime =()=>{
		time= new Date().toLocaleTimeString();
		Utime(time);
	}
	setInterval(UpdateTime,1000)
  return (
    <div className="DigitalClock">
      <p> {time}</p>
      </div>
  );
}


export default DigitalClock;
