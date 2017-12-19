const defaultState = {
  title: 'Meet'
};

export default (state = defaultState, action) => {
  console.log(state,action)
  switch (action.type) {
      case "@@router/LOCATION_CHANGE":
          var name = action.payload.pathname
          return {
              ...state,
              title:name === "/"?state.title:name.substr(1).replace("/",">")
          }
      default:
          return state;
  }
};
