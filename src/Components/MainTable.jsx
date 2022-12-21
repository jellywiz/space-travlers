/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import './MainTable.css';

export default function MainTable({
  mName,
  name,
  desc,
  reserved,
  id,
  handleMission,
}) {
  return (
    <tr className={mName}>
      <td style={{ fontWeight: 'bold' }}>{name}</td>
      <td className="justify">{desc}</td>
      <td className="status">
        {reserved ? (
          <h3 className="Active-Member-Text">Active Member</h3>
        ) : (
          <h3 className="Inactive-Member-Text">Not A Member</h3>
        )}
      </td>
      <td className="mission-buttons">
        {reserved ? (
          <button
            className="Inactive-Member"
            type="button"
            onClick={() => {
              handleMission(id, reserved);
            }}
          >
            Leave Mission
          </button>
        ) : (
          <button
            className="Active-Member"
            type="button"
            onClick={() => {
              handleMission(id, reserved);
            }}
          >
            Join Mission
          </button>
        )}
      </td>
    </tr>
  );
}

MainTable.propTypes = {
  mName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleMission: PropTypes.func.isRequired,
};
