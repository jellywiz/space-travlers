/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './RocketsCSS.css';

const Rocket = ({
  id, rocketName, description, images, reserved, handleRocket,
}) => {
  const button = () => {
    if (!reserved) {
      return (
        <button
          type="button"
          className="btnReservation"
          onClick={() => {
            handleRocket(id);
          }}
        >
          Reserve Rocket
        </button>
      );
    }
    return (
      <button type="button" className="btnCancelReservation" onClick={() => handleRocket(id)}>
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
