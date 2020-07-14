import React from "react";
import { Route } from "react-router-dom";

import { Sidebar, Toolbar, BottomNav } from "../components";
import Channel from "./Channel";
import Home from "./Home";
import DMessages from "./DMessages";
import DMessage from "./DMessage";
import Profile from "./Profile";

const toolbarMenuItems = [
  { name: "Create Channel", path: "/create-channel", icon: "add" },
  { name: "Settings", path: "/settings", icon: "tune" },
];

const navItems = [
  { name: "Home", path: "/user/home", icon: "home" },
  { name: "Messages", path: "/user/messages", icon: "chat" },
  { name: "Me", path: "/user/profile", icon: "person" },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar navItems={navItems} />
      <div className="main-container">
        <Toolbar toolbarMenuItems={toolbarMenuItems} />
        <Route exact path="/user/home" component={Home} />
        <Route path="/user/channels/:channel_id" component={Channel} />
        <Route exact path="/user/messages" component={DMessages} />
        <Route path="/user/messages/:user_id" component={DMessage} />
        <Route path="/user/profile" component={Profile} />
        <BottomNav items={navItems} />
      </div>
    </div>
  );
};

export default Dashboard;
