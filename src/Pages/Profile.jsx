import React from 'react';
import MyRocket from '../Components/MyRocket/MyRocket';
import MyMissions from '../Components/MyMission/MyMission';
import './Profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <MyMissions />
      <MyRocket />
    </div>
  );
}

export default Profile;
