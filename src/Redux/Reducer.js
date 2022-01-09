const initState = 0;
const Reducer = (state = initState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      if (state != 0) {
        return state - 1;
      }

    default:
      return state;
  }
};
export default Reducer;
