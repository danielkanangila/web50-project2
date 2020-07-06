import React, { useContext } from "react";
import { Route } from "react-router-dom";

import { Sidebar, Toolbar, Menu, BottomNav } from "../components";
import Channel from "./Channel";
import Home from "./Home";
import { AppContext } from "../contexts";
import Messages from "./Messages";
import Message from "./Message";
import Profile from "./Profile";

const toolbarMenuItems = [
  { name: "Create Channel", path: "/create-channel", icon: "plus" },
  { name: "Settings", path: "/settings", icon: "sliders-h" },
];

const navItems = [
  { name: "Home", path: "/user/home", icon: "home" },
  { name: "Messages", path: "/user/messages", icon: "comments" },
  { name: "Me", path: "/user/profile", icon: "user" },
];

const Dashboard = () => {
  const { ToolbarTitle } = useContext(AppContext).appState;
  return (
    <div className="dashboard">
      <Sidebar navItems={navItems} />
      <div className="main-container">
        <Toolbar>
          {ToolbarTitle && <ToolbarTitle />}
          <Menu items={toolbarMenuItems} />
        </Toolbar>
        <Route exact path="/user/home" component={Home} />
        <Route path="/user/channels/:channel_id" component={Channel} />
        <Route path="/user/messages" component={Messages} />
        <Route path="/user/messages/:user_id" component={Message} />
        <Route path="/user/profile" component={Profile} />
        <BottomNav items={navItems} />
      </div>
    </div>
  );
};

export default Dashboard;
