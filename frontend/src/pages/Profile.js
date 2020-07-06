import React, { useEffect } from "react";

import { ImageCircle } from "../components";
import { useToolbar } from "../hooks/useToolbar";

const Profile = () => {
  const toolbar = useToolbar();

  useEffect(() => {
    toolbar.setContent({
      title: "Daniel Kanangila",
      subTitle: "",
      Image: () => <ImageCircle />,
    });
  }, []);
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
};

export default Profile;
