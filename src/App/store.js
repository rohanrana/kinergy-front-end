import {createStore, applyMiddleware, compose} from "redux";
import {routerMiddleware} from "react-router-redux";
import thunk from "redux-thunk";
import {createBrowserHistory} from "history";
import rootReducer from "./rootReducer";
import {loadState, saveState} from "./localStorage";
import NetworkServices from "../utilities/network-service.js";

export const history = createBrowserHistory();
const persistedState = loadState();
const initialState = persistedState;
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(rootReducer, initialState, composedEnhancers);
NetworkServices.setupInterceptors(store, history);
let tempState = {};
if (initialState) {
  tempState = initialState;
}
store.subscribe(() => {
  if (
    store.getState() &&
    store.getState().localStore &&
    tempState !== store.getState().localStore
  ) {
    saveState({
      localStore: store.getState().localStore,
    });
    tempState = store.getState().localStore;
  }
});
export default store;
