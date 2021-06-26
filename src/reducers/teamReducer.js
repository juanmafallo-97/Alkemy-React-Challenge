const initialState = {};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HERO_ADDED":
      return {
        [action.payload.id]: action.payload,
        ...state,
      };

    case "HERO_REMOVED":
      const id = action.payload;
      const heroes = { ...state };
      delete heroes[id];
      return heroes;

    case "TEAM_LOADED":
      return action.payload;

    default:
      return state;
  }
};

export default teamReducer;
