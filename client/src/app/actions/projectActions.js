import axios from "axios";

import {
  PROJECT_CURRENT_USER_PROJECTS_REQUEST,
  PROJECT_CURRENT_USER_PROJECTS_SUCCESS,
  PROJECT_CURRENT_USER_PROJECTS_FAIL,
} from "../types/projectTypes";

export const getCurrentUerProjects = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROJECT_CURRENT_USER_PROJECTS_REQUEST,
    });

    const {
      userAuthentication: { currentUser },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${currentUser.token}`,
      },
    };

    const { data } = await axios.get("/api/projects/", config);

    dispatch({
      type: PROJECT_CURRENT_USER_PROJECTS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_CURRENT_USER_PROJECTS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
