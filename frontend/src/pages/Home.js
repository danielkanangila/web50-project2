import React, { useEffect, Fragment, useState } from "react";
import { Logo } from "../components";
import { useToolbar } from "../hooks/useToolbar";
import { useWindowSize } from "../hooks/useWindowSize";
import Messages from "./Messages";
import Channels from "./Channels";
import { useAppContext } from "../hooks/useAppContext";

const Home = () => {
  const toolbar = useToolbar();
  const [hasMessages, setHasMessages] = useState(true);
  const windowSize = useWindowSize();
  const appContext = useAppContext();

  useEffect(() => {
    toolbar.setContent({
      title: "Welcome",
      subTitle: "Check your channel",
      Image: () => <Logo />,
    });
  }, []);

  const show = () => {
    return hasMessages && windowSize.width <= 850;
  };

  return (
    <div className="welcome">
      {show() ? (
        <div className="home-content">
          <Channels />
          <Messages />
        </div>
      ) : (
        <Fragment>
          <img
            src={require("./../images/w-illustration.svg")}
            alt="Stay connected"
          />
          <h2>Stay Connected With Your Fellas.</h2>
        </Fragment>
      )}
    </div>
  );
};

export default Home;
