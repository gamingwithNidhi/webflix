import React from 'react';
import './Coordinate.css';
import Geolocation from '@react-native-community/geolocation';
import DigitalClock from '../digitalClock/DigitalClock';

function Coordinate() {
  return (
    <div className="Coordinate">
    		<DigitalClock/>
        </div>
  );
}

export default Coordinate;
