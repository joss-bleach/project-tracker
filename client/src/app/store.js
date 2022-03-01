import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import {
  userAuthenticationReducer,
  userRegistrationReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
  userAuthentication: userAuthenticationReducer,
  userRegistration: userRegistrationReducer,
});

const currentUserInformationFromStorage = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : {};

const initialState = {
  userAuthentication: {
    currentUser: currentUserInformationFromStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
