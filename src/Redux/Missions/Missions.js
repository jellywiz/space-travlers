/* eslint-disable camelcase */
import GET_MISSIONS from '../Actions';

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET_MISSIONS}/fulfilled`:
      return Object.keys(action.payload).map((key) => {
        const { mission_id, mission_name, description } = action.payload[key];
        return {
          mission_id,
          mission_name,
          description,
        };
      });
    default:
      return state;
  }
};

export default missionsReducer;
