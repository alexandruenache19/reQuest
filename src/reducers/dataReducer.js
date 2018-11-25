export default (state = "loading", action) => {
  switch (action.type) {
    case "FETCH_PROFILE_DISCIPLINE":
      return action.payload;
    default:
      return state;
  }
};
