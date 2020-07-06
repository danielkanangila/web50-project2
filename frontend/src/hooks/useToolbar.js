import React, { useContext } from "react";
import { AppContext } from "../contexts";
import { ToolbarTitle } from "../components";
import { formatToolBarSubMessages } from "../utils";

export const useToolbar = () => {
  const { appState, setAppState } = useContext(AppContext);

  const setContent = ({ title, subTitle, Image }) => {
    setAppState({
      ...appState,
      ToolbarTitle: () => (
        <ToolbarTitle
          title={title}
          subTitle={formatToolBarSubMessages(subTitle)}
          Image={<Image />}
        />
      ),
    });
  };

  return { appState, setContent };
};
