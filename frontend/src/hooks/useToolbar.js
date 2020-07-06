import React, { useContext } from "react";
import { AppContext } from "../contexts";
import { ToolbarTitle } from "../components";

export const useToolbar = () => {
  const { appState, setAppState } = useContext(AppContext);

  const setContent = ({ title, subTitle, Image }) => {
    setAppState({
      ...appState,
      ToolbarTitle: () => (
        <ToolbarTitle title={title} subTitle={subTitle} Image={<Image />} />
      ),
    });
  };

  return { appState, setContent };
};
