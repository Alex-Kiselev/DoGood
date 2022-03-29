const postReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "ALL POSTS":
      console.log("ALL POSTS", payload);
      return payload;
    case "ADD POST":
      return [payload, ...state];

    case "SET_STATUS":
      console.log("SET_STATUS", payload);
      return payload;
      
    default:
      return state;
  }
};

export default postReducer;
