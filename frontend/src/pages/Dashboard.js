import React, { useContext } from "react";
import { Route } from "react-router-dom";

import { Sidenav, Toolbar, Menu } from "../components";
import Channel from "./Channel";
import Home from "./Home";
import { AppContext } from "../contexts";

const toolbarMenuItems = [
  { name: "Create Channel", path: "/create-channel", icon: "plus" },
  { name: "Settings", path: "/settings", icon: "sliders-h" },
];

const Dashboard = () => {
  const { ToolbarTitle } = useContext(AppContext).appState;
  return (
    <div className="dashboard">
      <Sidenav />
      <Toolbar>
        {ToolbarTitle && <ToolbarTitle />}
        <Menu items={toolbarMenuItems} />
      </Toolbar>
      <Route path="/" component={Home} />
      <Route path="/channels/:channel_id" component={Channel} />
    </div>
  );
};

export default Dashboard;
