import React, { useState } from "react";
import styled from "styled-components";

import colors from "./../config/colors";
import Hamburger from "./Hamburger";
import Sidenav from "./Sidenav";

const Sidebar = ({ profilePic, navItems }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  return (
    <Wrapper className="sidebar">
      <div className="sidebar-header">
        <Hamburger open={openSideMenu} setOpen={setOpenSideMenu} />
      </div>
      <Sidenav items={navItems} open={openSideMenu} />
      <div className="sidebar-body">
        <div className="channels">
          <h3>Channel</h3>
        </div>
        <div className="direct-messages">
          <h3>Direct Messages</h3>
        </div>
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
      justify-content: space-between;
      align-items: center;
    }
    &-body {
      width: 100%auto;
      height: calc(100vh - 57px);
      margin-top: 57px;
      padding: 20px 20px 0;
      overflow-y: auto;
      border-right: 1px solid ${colors.lightgray};
    }
  }
`;

export default Sidebar;
