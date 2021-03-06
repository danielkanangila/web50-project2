import React, { useState, Fragment } from "react";
import { useLocation, useHistory } from "react-router-dom";
import styled from "styled-components";

import colors from "./../config/colors";
import Hamburger from "./Hamburger";
import Sidenav from "./Sidenav";
import InputField from "./InputField";
import Icon from "./Icon";
import Channels from "../pages/Channels";
import DMessages from "../pages/DMessages";

const Sidebar = ({ profilePic, navItems }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const location = useLocation();
  const history = useHistory();

  return (
    <Wrapper className="sidebar">
      <div className="sidebar-header">
        {!location.pathname.includes("messages") && (
          <Fragment>
            <Hamburger open={openSideMenu} setOpen={setOpenSideMenu} />
            <InputField
              type="text"
              Icon={<Icon name="search" position="right" />}
              placeholder="Search"
              _style="rounded"
            />
          </Fragment>
        )}
        {location.pathname.includes("messages") && (
          <button onClick={() => history.push("/user/home")}>
            <Icon name="arrow_back" />
          </button>
        )}
      </div>
      <Sidenav items={navItems} open={openSideMenu} setOpen={setOpenSideMenu} />
      <div className="sidebar-body">
        {(location.pathname === "/user/home" ||
          location.pathname.includes("channels")) && (
          <Fragment>
            <Channels />
            <DMessages />
          </Fragment>
        )}
        {(location.pathname === "/user/messages" ||
          location.pathname.includes("messages")) && (
          <Fragment>
            <DMessages />
          </Fragment>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  position: relative;

  @media (min-width: 850px) {
    display: block;
  }
  .sidebar {
    &-header {
      background-color: ${colors.white};
      position: fixed;
      top: 0;
      left: 0;
      padding: 0 20px;
      width: 27%;
      height: 57px;
      border-bottom: 2px solid ${colors.primary};
      -webkit-box-shadow: 1px 3px 11px -4px rgba(153, 153, 153, 1);
      -moz-box-shadow: 1px 3px 11px -4px rgba(153, 153, 153, 1);
      box-shadow: 1px 3px 11px -4px rgba(153, 153, 153, 1);
      z-index: 702;
      display: flex;
      align-items: center;
      input {
        background: transparent;
        padding: 6px 15px;
        padding-right: 35px;
        margin-left: 15px;
        width: 95%;
      }
      button {
        transition: ease 0.3s;
        top: 2.5px;
        right: 5px;
        cursor: pointer;
        &:hover {
          span {
            color: ${colors.primary};
          }
        }
      }
    }
    &-body {
      width: 100%auto;
      height: calc(100vh - 57px);
      margin-top: 57px;
      padding: 20px 0px 50px;
      overflow-y: auto;
      border-right: 1px solid ${colors.lightgray};
    }
  }
`;

export default Sidebar;
