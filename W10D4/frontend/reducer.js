const initialState = {
  city: "Please Select", 
  jobs: []
};

const reducer = (state = initialState, action) => {
  Object.freeze(state)
  const newState = Object.assign({}, state)
  switch (action.type) {
    case "SWITCH_LOCATION":
      newState["city"] = action.city
      newState["jobs"] = action.jobs
      return newState;
    default:
      return newState;
  }
};


window.reducer = reducer;
export default reducer;