import { hydrate } from './../src/plant.js'

describe('hydrate', () => {

  test('should increment a plant water level by 1', () => {
    const plant = {};
    hydrate(plant);
    expect(plant.water).toEqual(1);
  });
});