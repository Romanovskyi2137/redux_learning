const defaultState = {
    clients: []
  };

const ADD_CLIENT = "ADD_CLIENT";
const REMOVE_CLIENT = "REMOVE_CLIENT";

export const clinetReducer = (state = defaultState, action) => {
    switch (action.type) {
      case ADD_CLIENT:
        return {...state, clients: [...state.clients, action.payload]};
      case REMOVE_CLIENT:
        return {...state, clients: state.clients.filter(client => client.id !== action.payload)};
      default:
        return state
    }
  };

export const addClientAction = (payload) => {
    return {type: ADD_CLIENT, payload}
  };

export const removeClientAction = (payload) => {
  return {type: REMOVE_CLIENT, payload}
};