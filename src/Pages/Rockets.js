import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({
  id, rocketName, description, images,
}) => (
  <div>
    <div>
      {id}
      <hr />
    </div>
    <div>
      {rocketName}
      <hr />
    </div>
    <div>{description}</div>
    <div><img src={images[0]} alt={rocketName} /></div>
  </div>
);

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])).isRequired,
};

export default Rocket;
