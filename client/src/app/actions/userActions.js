import axios from "axios";
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
} from "../types/userTypes";

export const authenticateUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_AUTHENTICATION_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/authenticate/",
      {
        email,
        password,
      },
      config
    );

    dispatch({
      type: USER_AUTHENTICATION_SUCCESS,
      payload: data,
    });

    localStorage.setItem("currentUser", JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: USER_AUTHENTICATION_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const registerNewUser = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTRATION_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/",
      {
        name,
        email,
        password,
      },
      config
    );

    dispatch({
      type: USER_REGISTRATION_SUCCESS,
      payload: data,
    });
    localStorage.setItem("currentUser", JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: USER_REGISTRATION_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const userLogout = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  dispatch({
    type: USER_LOGOUT,
  });
};

export const getCurrentUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_CURRENT_INFORMATION_REQUEST,
    });

    const {
      userAuthentication: { currentUser },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${currentUser.token}`,
      },
    };

    const { data } = await axios.get("/users/getAuth/", config);

    dispatch({
      type: USER_CURRENT_INFORMATION_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: USER_REGISTRATION_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
