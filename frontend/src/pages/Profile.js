import React, { useContext, useEffect } from "react";
import { AppContext } from "../contexts";
import { ToolbarTitle } from "../components";
import ProfileCircle from "../components/ProfileCircle";

const Profile = () => {
  const { appState, setAppState } = useContext(AppContext);

  useEffect(() => {
    setAppState({
      ...appState,
      ToolbarTitle: () => (
        <ToolbarTitle
          title="Daniel Kanangila"
          subTitle=""
          Image={<ProfileCircle />}
        />
      ),
    });
  }, []);
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
};

export default Profile;
