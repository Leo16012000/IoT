import { CABINET_SIZE } from "./types";

const initialState = {
  cabinetSize: 0,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case CABINET_SIZE: {
      return { ...state, cabinetSize: action.value };
    }

    default:
      return state;
  }
};

export default appReducer;
// logger to print previous state + new state
