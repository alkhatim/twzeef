const INIT_STATE = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        ...state,
        user: {
          _id: action.payload._id,
          role: action.payload.role,
          username: action.payload.username || "username",
        },
        isLoggedIn: true,
        isLoading: false,
      };
    case "LOGIN_FAILED":
    case "LOGGED_OUT":
      return {
        ...state,
        user: null,
        isLoggedIn: false,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
