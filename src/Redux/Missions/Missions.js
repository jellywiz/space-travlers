const JOIN_MISSION = 'space-travlers/Mission/JOIN_MISSION';
const UPDATE = 'space-travlers/Mission/UPDATE';

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE:
      return Object.keys(action.data).map((key) => ({
        mission_id: action.data[key].mission_id,
        mission_name: action.data[key].mission_name,
        description: action.data[key].description,
        reserved: false,
      }));
    case JOIN_MISSION:
      return state.map((e) => {
        if (e.mission_id === action.payload) {
          return { ...e, reserved: !e.reserved };
        }
        return e;
      });
    default:
      return state;
  }
};

export default missionsReducer;

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

export const showMissions = () => async (dispatch) => {
  const res = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await res.json();
  dispatch({
    type: UPDATE,
    data,
  });
};
