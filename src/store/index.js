import { applyMiddleware, combineReducers, createStore } from "redux";
import { cashReducer } from "./cashReducer";
import { clinetReducer } from "./clientReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    cash: cashReducer,
    clients: clinetReducer
});


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));