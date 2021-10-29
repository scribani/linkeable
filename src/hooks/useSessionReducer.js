import { useReducer } from "react";
import { SIGN_IN, SIGN_OUT } from "../constants";

function sessionReducer(state, action) {
  switch (action.type) {
    case SIGN_IN:
      const { userData, token } = action;
      return { ...state, userData, token };
    case SIGN_OUT:
      return { ...state, userData: {}, token: "" };
    default:
      return state;
  }
}

export default function useSessionReducer() {
  const [state, dispatch] = useReducer(sessionReducer, {
    token: "",
    userData: {},
  });

  return [state, dispatch];
}
