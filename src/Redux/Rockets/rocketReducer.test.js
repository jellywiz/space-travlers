import { getRockets, addReservation } from './rocketsReducer';

describe('rocketReducer.js test', () => {
  it('Expect the reservation of rocket one to have an id of 1', () => {
    // Arrange
    const id = 1;

    // Act
    const result = addReservation(id);

    // Assert
    expect(result.payload).toBe(1);
  });
  it('Expect type of reservation of rocket to be RESERVE_ROCKET', () => {
    // Arrange
    const id = 1;

    // Act
    const result = addReservation(id);

    // Assert
    expect(result.type).toBe('space-travlers/Rockets/GET_ROCKETS');
  });
  it('Expects the rockets to be an object', () => {
    // Arrange
    const rocket = {};

    // Act
    const result = getRockets(rocket);

    // Assert
    expect(typeof result.payload).toBe('object');
  });
});
