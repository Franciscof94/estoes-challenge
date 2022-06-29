import { SHOW_MODAL } from "./types";

export const showModal = (data) => ({
  type: SHOW_MODAL,
  payload: data,
});
