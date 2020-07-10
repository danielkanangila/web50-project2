import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import colors from "../config/colors";
import { AppContext } from "../contexts";
import Menu from "./Menu";
import { Icon } from ".";

const Toolbar = ({ toolbarMenuItems }) => {
  const { ToolbarTitle, shownBackNav } = useContext(AppContext).appState;
  const history = useHistory();

  return (
    <Wrapper className="toolbar">
      <div className="bar">
        <div className="toolbar-left">
          {shownBackNav && (
            <button
              onClick={() => history.goBack()}
              className="btn btn-rounded"
            >
              <Icon name="arrow-left" />
            </button>
          )}
          {ToolbarTitle && <ToolbarTitle />}
        </div>
        <Menu items={toolbarMenuItems} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  .bar {
    background-color: ${colors.white};
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 20px;
    width: 100%;
    height: 57px;
    border-bottom: 2px solid ${colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    -webkit-box-shadow: 1px 3px 11px -4px rgba(153, 153, 153, 1);
    -moz-box-shadow: 1px 3px 11px -4px rgba(153, 153, 153, 1);
    box-shadow: 1px 3px 11px -4px rgba(153, 153, 153, 1);
    z-index: 700;
    @media (min-width: 850px) {
      width: 73%;
      left: 27%;
    }
  }
  .toolbar-left {
    display: flex;
    align-items: center;
  }
  .btn {
    border-radius: 50%;
    @media (min-width: 850px) {
      display: none;
    }
  }
`;

export default Toolbar;
