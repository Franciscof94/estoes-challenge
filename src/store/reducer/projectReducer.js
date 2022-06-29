import {
  ADD_PROJECT,
  CURRENTS_PROJECTS,
  DELETE_PROJECT,
  EDIT_PROJECT,
  FILTER_PROJECT,
  ID_PROJECT_DELETE,
} from "../actions/types";

const initialState = {
  newProject: [],
  editProject: {},
  filtered: [],
  id: "",
};

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        newProject: [...state.newProject, action.payload],
        filtered: [...state.filtered, action.payload],
      };
    case DELETE_PROJECT:

      return {
        ...state,
        filtered: state.filtered.filter(
          (project) => project.id !== action.payload
        ),
      };
    case ID_PROJECT_DELETE:
      return {
        ...state,
        id: action.payload,
      };
    case EDIT_PROJECT:
      return {
        ...state,
        filtered: state.filtered.filter(
          (project) => project.id !== action.payload
        ),
        editProject: state.newProject.filter(
          (project) => project.id === action.payload
        ),
      };
    case FILTER_PROJECT:
      return {
        ...state,
        filtered:
          action.payload !== ""
            ? state.filtered.filter((data) =>
                data.projectName
                  .toLowerCase()
                  .startsWith(action.payload.toLowerCase())
              )
            : state.newProject,
      };
    default:
      return state;
  }
}
