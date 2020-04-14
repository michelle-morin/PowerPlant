export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

export const feed = changeState("soil");
export const hydrate = changeState("water");
export const giveLight = changeState("light");

export const blueFood = feed(5);
export const greenFood = changeState("soil")(10);
export const yuckyFood = feed(-5);

export const lotsOfWater = hydrate(10);
export const spritzOfWater = hydrate(2);

export const lowLight = giveLight(1);
export const highLight = giveLight(5);

const initialValues = {soil: 0, water: 0, light: 0};

export const storeState = (initialState) => {
  let currentState = initialState;
  // let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const cactus = storeState(initialValues);
export const deskPlant = storeState(initialValues);