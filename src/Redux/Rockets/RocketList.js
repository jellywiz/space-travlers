import { useSelector, useDispatch } from 'react-redux';
import { addReservation } from './rocketsReducer';
import Rocket from '../../Pages/Rockets';

const ListRockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  const handleRocket = (id) => {
    dispatch(addReservation(id));
  };
  return (
    <div className="rocket-container">
      {
        rockets.map((rocket) => (
          <div key={rocket.id}>
            <Rocket
              id={rocket.id}
              rocketName={rocket.rocketName}
              description={rocket.description}
              images={rocket.images}
              reserved={rocket.reserved}
              handleRocket={handleRocket}
            />
          </div>
        ))
      }
    </div>
  );
};

export default ListRockets;
