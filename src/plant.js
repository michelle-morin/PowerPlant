// export const hydrate = (plant) => {
//   return {
//     ...plant,
//     water: (plant.water || 0) + 1
//   }
// };

// export const feed = (plant) => {
//   return {
//     ...plant,
//     soil: (plant.soil || 0) + 1
//   }
// };

export const changePlantState = (plant, property) => {
  return {
    ...plant,
    [property]: (plant[property] || 0) + 1
  }
};

// export const changeState = (state, prop, value) => {
//   return {
//     ...state,
//     [prop]: (state[prop] || 0) + value
//   }
// };

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
};

export const feed = changeState("soil");
export const hydrate = changeState("water");
export const giveLight = changeState("light");

