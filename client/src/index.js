import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as formReducer } from "redux-form";
import { Provider } from "react-redux";
import thunk from "redux-thunk";


import App from "./App";
import checkInReducer from "./store/reducers/checkIn";
import authReducer from "./store/reducers/auth"

const rootReducer = combineReducers({
  auth: authReducer,
  checkIn: checkInReducer,
  form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
