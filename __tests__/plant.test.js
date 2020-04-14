import { hydrate, feed, yuckyFood, storeState, stateChanger, blueFood } from './../src/plant.js';

describe('hydrate', () => {

  test('should increment a plant water level by 1', () => {
    const plant = {};
    const newPlant = hydrate(1)(plant);
    expect(newPlant.water).toEqual(1);
  });
});

describe('feed', () => {

  test('should increment a plant soil level by 1', () => {
    const plant = {};
    const newPlant = feed(1)(plant);
    expect(newPlant.soil).toEqual(1);
  });
});

describe('yuckyFood', () => {

  test('should decrement a plant soil level by 5', () => {
    const plant = {};
    const newPlant = yuckyFood(plant);
    expect(newPlant.soil).toEqual(-5);
  });
});

describe('stateChanger', () => {

  test('should change state by a specified function', () => {
    const fedPlant = stateChanger(blueFood);
    expect(fedPlant.soil).toBe(5);
  });
});