export const teamMiddleware = (storeAPI) => (next) => (action) => {
  if (action.type === "HERO_ADDED" || action.type === "HERO_REMOVED") {
    next(action);
    const heroes = storeAPI.getState().heroes;
    localStorage.setItem("teamHeroes", JSON.stringify(heroes));
    return;
  }
  return next(action);
};
