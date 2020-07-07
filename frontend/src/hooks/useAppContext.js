import { useContext } from "react";
import { AppContext } from "../contexts";

export const useAppContext = () => {
  const { appState, setAppState } = useContext(AppContext);

  const setContext = (payload) => {
    setAppState({
      ...appState,
      ...payload,
    });
  };

  return { appState, setContext };
};
