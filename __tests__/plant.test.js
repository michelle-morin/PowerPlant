import { hydrate } from './../src/plant.js'

describe('hydrate', () => {

  test('should increment a plant water level by 1', () => {
    const plant = {};
    const newPlant = hydrate(plant);
    expect(newPlant.water).toEqual(1);
  });
});