const defaultState = {
    clients: []
  };

export const clinetReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "ADD_CLIENT":
        return {...state, cash: state.cash + action.payload};
      case "REMOVE_CLIENT":
        return {...state, cash: state.cash - action.payload};
      default:
        return state
    }
  };