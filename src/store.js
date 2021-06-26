import { createStore, applyMiddleware, compose } from "redux";
import { teamMiddleware } from "./middleware";
import rootReducer from "./reducers/rootReducer";

const middleware = applyMiddleware(teamMiddleware);

const enhancers = compose(
  middleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, enhancers);

export default store;
