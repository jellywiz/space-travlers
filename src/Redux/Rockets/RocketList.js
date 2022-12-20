import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Rocket from '../../Pages/Rockets';
import fetchRockets from './fetchRocketsAPI';

const ListRockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  return (
    <div>
      {
        rockets.map((rocket) => (
          <div key={rocket.id}>
            <Rocket
              id={rocket.id}
              rocketName={rocket.rocketName}
              description={rocket.description}
              images={rocket.images}
            />
          </div>
        ))
      }
    </div>
  );
};

export default ListRockets;
