import { combineReducers } from "redux";
import project from "./projectReducer";
import showModal from "./modalReducer";

export default combineReducers({
  project,
  showModal,
});
