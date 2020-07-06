import React, { useEffect } from "react";
import { Logo } from "../components";
import { useToolbar } from "../hooks/useToolbar";

const Home = () => {
  const toolbar = useToolbar();

  useEffect(() => {
    toolbar.setContent({
      title: "Welcome",
      subTitle: "Check your channel",
      Image: () => <Logo />,
    });
  }, []);

  return (
    <div className="welcome">
      <img
        src={require("./../images/w-illustration.svg")}
        alt="Stay connected"
      />
      <h2>Stay Connected With Your Fellas.</h2>
    </div>
  );
};

export default Home;
