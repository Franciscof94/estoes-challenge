import {
  ADD_PROJECT,
  CURRENTS_PROJECTS,
  DELETE_PROJECT,
  EDIT_PROJECT,
  FILTER_PROJECT,
  ID_PROJECT_DELETE,
} from "./types";

export const addProject = (data) => ({
  type: ADD_PROJECT,
  payload: data,
});

export const deleteProject = (data) => {
  return {
    type: DELETE_PROJECT,
    payload: data,
  };
};

export const idProjectDelete = (data) => {
  
  return {
    type: ID_PROJECT_DELETE,
    payload: data,
  };
};

export const editProject = (data) => ({
  type: EDIT_PROJECT,
  payload: data,
});

export const filterProject = (data) => ({
  type: FILTER_PROJECT,
  payload: data,
});
