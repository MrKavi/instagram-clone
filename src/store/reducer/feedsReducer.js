const feedsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_FEEDS_DATA":
      return action.payload;
    default:
      return state;
  }
};

export default feedsReducer;
