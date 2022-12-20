export const GET_ROCKETS = 'space-travlers/Rockets/GET_ROCKETS';

const initialData = [];

export const getRockets = (rocket) => ({
  type: GET_ROCKETS,
  payload: rocket,
});

export default function rocketsReducer(state = initialData, action) {
  switch (action.type) {
    case `${GET_ROCKETS}/fulfilled`:
      return Object.keys(action.payload).map((key) => ({
        id: action.payload[key].id,
        rocketName: action.payload[key].rocket_name,
        description: action.payload[key].description,
        images: action.payload[key].flickr_images,
      }));
    default:
      return state;
  }
}
