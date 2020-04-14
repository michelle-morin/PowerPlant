import { hydrate, feed, changePlantState } from './../src/plant.js';

describe('hydrate', () => {

  test('should increment a plant water level by 1', () => {
    const plant = {};
    const newPlant = hydrate(plant);
    expect(newPlant.water).toEqual(1);
  });
});

describe('feed', () => {

  test('should increment a plant soil level by 1', () => {
    const plant = {};
    const newPlant = feed(plant);
    expect(newPlant.soil).toEqual(1);
  });
});

describe('changePlantState', () => {

  test('should increment a plant soil level by 1', () => {
    const plant = {};
    const newPlant = changePlantState(plant, "soil");
    expect(newPlant.soil).toEqual(1);
  });
});
