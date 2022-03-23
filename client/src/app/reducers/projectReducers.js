import {
  PROJECT_CURRENT_USER_PROJECTS_REQUEST,
  PROJECT_CURRENT_USER_PROJECTS_SUCCESS,
  PROJECT_CURRENT_USER_PROJECTS_FAIL,
  PROJECT_CLEAR_CURRENT_USER_PROJECTS,
} from "../types/projectTypes";

export const projectUserProjectsReducer = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
    case PROJECT_CURRENT_USER_PROJECTS_REQUEST:
      return {
        loading: true,
      };
    case PROJECT_CURRENT_USER_PROJECTS_SUCCESS:
      return {
        loading: false,
        projects: action.payload,
      };
    case PROJECT_CURRENT_USER_PROJECTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case PROJECT_CLEAR_CURRENT_USER_PROJECTS:
      return [];
  }
};
