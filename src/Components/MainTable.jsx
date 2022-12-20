import { useState } from 'react';
import PropTypes from 'prop-types';
import './MainTable.css';

export default function MainTable({ mName, name, desc }) {
  const [activeMember, setActiveMember] = useState('Not A Member');
  const [activeClass, setActiveClass] = useState('Inactive-Member');

  const handleClick = () => {
    if (activeMember === 'Not A Member') {
      setActiveMember('Active Member');
      setActiveClass('Active-Member');
    } else {
      setActiveMember('Not A Member');
      setActiveClass('Inactive-Member');
    }
  };
  return (
    <tr className={mName}>
      <td style={{ fontWeight: 'bold' }}>{name}</td>
      <td className="justify">{desc}</td>
      <td>{activeMember}</td>
      <td style={{ padding: '1rem' }}>
        <button type="button" className={activeClass} onClick={handleClick}>
          {activeMember}
        </button>
      </td>
    </tr>
  );
}

MainTable.propTypes = {
  mName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
