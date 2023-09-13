const defaultState = {
    cash: 0
  };

export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "UP_CASH":
        return {...state, cash: state.cash + action.payload};
      case "DROP_CASH":
        return {...state, cash: state.cash - action.payload};
      default:
        return state
    }
  };