const initialState = {
  loggedIn: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN": {
      return {
        loggedIn: true,
        error: null,
      };
    }
    case "LOGGED_OUT": {
      return initialState;
    }
    case "AUTH_ERROR": {
      return {
        loggedIn: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
