import React from 'react';
import { useSelector } from 'react-redux';
import './MyMission.css';

const MyMissions = () => {
  const joinedMissions = useSelector((state) => state.Missions.filter((e) => e.reserved));
  return (
    <div className="container">
      <h3>My Missions</h3>
      <div className="missionsContainer">
        {joinedMissions.map((mission) => (
          <div key={mission.mission_id} className="mission">
            {mission.mission_name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyMissions;
