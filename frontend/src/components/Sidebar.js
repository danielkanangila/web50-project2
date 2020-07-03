import React, { useState } from "react";
import styled from "styled-components";

import colors from "./../config/colors";
import Hamburger from "./Hamburger";
import Sidenav from "./Sidenav";
import InputField from "./InputField";
import Icon from "./Icon";
import Channels from "../pages/Channels";

const Sidebar = ({ profilePic, navItems }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  return (
    <Wrapper className="sidebar">
      <div className="sidebar-header">
        <Hamburger open={openSideMenu} setOpen={setOpenSideMenu} />
        <InputField
          type="text"
          Icon={<Icon name="search" position="right" />}
          placeholder="Search"
        />
      </div>
      <Sidenav items={navItems} open={openSideMenu} setOpen={setOpenSideMenu} />
      <div className="sidebar-body">
        <Channels />
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
      position: absolute;
      top: 0;
      left: 0;
      padding: 0 20px;
      width: 100%;
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
        border: none;
        border: 1px solid ${colors.lightgray};
        border-radius: 25px;
        padding: 6px 15px;
        padding-right: 35px;
        margin-left: 15px;
        width: 95%;
      }
      .icon {
        transition: ease 0.3s;
        top: 6px;
        right: 8px;
        &:hover {
          color: ${colors.primary};
        }
      }
    }
    &-body {
      width: 100%auto;
      height: calc(100vh - 57px);
      margin-top: 57px;
      padding: 20px 0px 0;
      overflow-y: auto;
      border-right: 1px solid ${colors.lightgray};
    }
  }
`;

export default Sidebar;
