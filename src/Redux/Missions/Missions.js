import GET_MISSIONS from '../Actions';

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET_MISSIONS}/fulfilled`:
      return Object.keys(action.payload).map((key) => ({
        missionId: action.payload[key].mission_id,
        missionName: action.payload[key].mission_name,
        description: action.payload[key].description,
      }));
    default:
      return state;
  }
};

export default missionsReducer;
