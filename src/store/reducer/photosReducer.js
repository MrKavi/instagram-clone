const photosReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_PHOTOS_DATA":
      return action.payload;
    default:
      return state;
  }
};

export default photosReducer;
