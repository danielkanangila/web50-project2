import React, { useContext, useEffect } from "react";
import { AppContext } from "../contexts";
import { Logo, ToolbarTitle } from "../components";

const Messages = () => {
  const { appState, setAppState } = useContext(AppContext);

  useEffect(() => {
    setAppState({
      ...appState,
      ToolbarTitle: () => (
        <ToolbarTitle
          title="Messages"
          subTitle="You have 300 messages"
          Image={<Logo />}
        />
      ),
    });
  }, []);

  return (
    <div>
      <h2>Messages</h2>
    </div>
  );
};

export default Messages;