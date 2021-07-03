const initialState = {
  auth: false,
  user: [],
};

const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case "prantho":
      state = {
        ...state,
        auth: true,
      };
      return state;

    default:
      return state;
  }
};
export default auth;
