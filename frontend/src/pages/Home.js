import React, { useEffect, useContext } from "react";
import { AppContext } from "../contexts";
import { ToolbarTitle, Logo } from "../components";

const Home = () => {
  const { appState, setAppState } = useContext(AppContext);

  useEffect(() => {
    setAppState({
      ...appState,
      ["ToolbarTitle"]: () => (
        <ToolbarTitle
          title="Welcome"
          subTitle="check your channel"
          Image={<Logo />}
        />
      ),
    });
  }, []);

  return (
    <div className="welcome">
      <img src={require("./../images/w-illustration.svg")} />
      <h2>Stay Connected With Your Fellas.</h2>
    </div>
  );
};

export default Home;
