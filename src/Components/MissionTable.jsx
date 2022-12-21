import { useSelector, useDispatch } from 'react-redux';
import { joinMission } from '../Redux/Missions/Missions';
import MainTable from './MainTable';
import './MissionTable.css';

export default function MissionTable() {
  const Missions = useSelector((state) => state.Missions);
  const dispatch = useDispatch();
  const handleMission = (id) => {
    dispatch(joinMission(id));
  };

  return (
    <table className="Table">
      <thead className="Table-Header">
        <tr>
          <th className="Header-Item">Mission</th>
          <th className="Header-Item">Description</th>
          <th className="Header-Item">Status</th>
          <th className="Header-Item"><p> </p></th>
        </tr>
      </thead>
      <tbody className="Table-Body">
        {Missions.map((mission, index) => (index % 2 ? (
          <MainTable
            mName="Even"
            key={mission.mission_id}
            id={mission.mission_id}
            name={mission.mission_name}
            desc={mission.description}
            reserved={mission.reserved}
            handleMission={handleMission}
          />
        ) : (
          <MainTable
            mName="Odd"
            key={mission.mission_id}
            id={mission.mission_id}
            name={mission.mission_name}
            desc={mission.description}
            reserved={mission.reserved}
            handleMission={handleMission}
          />
        )))}
      </tbody>
    </table>
  );
}
