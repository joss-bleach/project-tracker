import {
  USER_REGISTRATION_REQUEST,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_FAIL,
  USER_AUTHENTICATION_REQUEST,
  USER_AUTHENTICATION_SUCCESS,
  USER_AUTHENTICATION_FAIL,
  USER_LOGOUT,
  USER_CURRENT_INFORMATION_REQUEST,
  USER_CURRENT_INFORMATION_SUCCESS,
  USER_CURRENT_INFORMATION_FAIL,
} from "../types/userTypes";

export const userAuthenticationReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
    case USER_AUTHENTICATION_REQUEST:
      return {
        loading: true,
      };
    case USER_AUTHENTICATION_SUCCESS:
      return {
        loading: false,
        currentUser: action.payload,
      };
    case USER_AUTHENTICATION_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_LOGOUT:
      return {};
  }
};

export const userRegistrationReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
    case USER_REGISTRATION_REQUEST:
      return {
        loading: true,
      };
    case USER_REGISTRATION_SUCCESS:
      return {
        loading: false,
        currentUser: action.payload,
      };
    case USER_REGISTRATION_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
  }
};

export const userCurrentInformationReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
    case USER_CURRENT_INFORMATION_REQUEST:
      return {
        loading: true,
      };
    case USER_CURRENT_INFORMATION_SUCCESS:
      return {
        loading: false,
        currentUser: action.payload,
      };
    case USER_CURRENT_INFORMATION_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
  }
};
