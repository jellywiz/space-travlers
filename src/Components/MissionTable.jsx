/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchMissions from '../Redux/Missions/MissionAPI';
import MainTable from './MainTable';
import './MissionTable.css';

export default function MissionTable() {
  const dispatch = useDispatch();
  const Missions = useSelector((state) => state.Missions);

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      dispatch(fetchMissions());
    }
    return () => {
      ignore = true;
    };
  }, []);

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
          />
        ) : (
          <MainTable
            mName="Odd"
            key={mission.mission_id}
            id={mission.mission_id}
            name={mission.mission_name}
            desc={mission.description}
          />
        )))}
      </tbody>
    </table>
  );
}
