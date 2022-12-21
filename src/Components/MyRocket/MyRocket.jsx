import React from 'react';
import { useSelector } from 'react-redux';
import './MyRocket.css';

const MyRocket = () => {
  const reservedRockets = useSelector((state) => state.rockets.filter((e) => e.reserved));
  return (
    <div className="rocket-container-div">
      <h3>My Rockets</h3>
      <div className="rocket-container-div-ins">
        {reservedRockets.map((rocket) => (
          <div key={rocket.id} className="rocket">
            {rocket.rocketName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRocket;
