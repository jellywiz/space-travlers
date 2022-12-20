export const GET_ROCKETS = 'space-travlers/Rockets/GET_ROCKETS';

const initialData = [];

export const getRockets = (rocket) => ({
  type: GET_ROCKETS,
  payload: rocket,
});

export default function rocketsReducer(state = initialData, action) {
  switch (action.type) {
    case `${GET_ROCKETS}/fulfilled`:
      return Object.keys(action.payload).map((key) => {
        const {
          id,
          rocket_name,
          description,
          flickr_images,
        } = action.payload[key];
        return {
          id,
          rocketName: rocket_name,
          description,
          images: flickr_images,
        };
      });
    default:
      return state;
  }
}
