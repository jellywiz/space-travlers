import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import './RocketsCSS.css';
import { addReservation } from '../Redux/Rockets/rocketsReducer';

const Rocket = ({
  id, rocketName, description, images, reserved,
}) => {
  const dispatch = useDispatch();
  const reserveRocket = () => dispatch(addReservation(id));
  const button = () => {
    if (!reserved) {
      return (
        <button type="button" className="btnReservation" onClick={reserveRocket}>
          Reserve Rocket
        </button>
      );
    }
    return (
      <button type="button" className="btnCancelReservation" onClick={reserveRocket}>
        Cancel Reservation
      </button>
    );
  };
  const reservationBadge = () => {
    if (reserved) {
      return (
        <>
          <span className="badge">Reserved</span>
          <span>&nbsp;</span>
        </>
      );
    }
    return '';
  };
  return (
    <div className="rocket-data" key={id}>
      <div>
        <picture>
          <img src={images[0]} alt={rocketName} className="image" />
        </picture>
      </div>
      <div className="description">
        <div className="rocket-name">
          <p className="bird-name">
            {rocketName}
          </p>
        </div>
        <div className="rocket-description">
          <p>
            {reservationBadge()}
            {description}
          </p>
        </div>
        <div className="reserve-action">
          {button()}
        </div>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  images: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])).isRequired,
};

export default Rocket;
