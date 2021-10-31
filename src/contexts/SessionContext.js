import { createContext } from "react";
import { SIGN_IN, SIGN_OUT } from "../constants";
import useSessionReducer from "../hooks/useSessionReducer";

export const SessionContext = createContext({
  session: null,
  signIn: () => {},
  signOut: () => {},
});

export const SessionProvider = ({ children }) => {
  const [session, dispatch] = useSessionReducer();

  function signIn(token, userData) {
    dispatch({ type: SIGN_IN, token, userData });
  }

  function signOut() {
    dispatch({ type: SIGN_OUT });
  }

  const value = {
    session,
    signIn,
    signOut,
  };

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};
