import React from "react";
import styled from "styled-components";
import Menu from "../Menu";
import { NavLink } from "react-router-dom";
import colors from "../../config/colors";

const ListItem = ({
  Image,
  title,
  description,
  to,
  onClick,
  highlight,
  menuItems,
  badgeContent,
}) => {
  return (
    <Wrapper
      to={to}
      onClick={onClick}
      activeClassName="active"
      className={`list-item ${highlight ? "highlight" : ""}`}
    >
      {Image && Image}
      <div className="list-item--middle">
        <div className="list-item--middle-top">
          <h3>{title}</h3>
          {badgeContent && <span className="badge">{badgeContent}</span>}
        </div>
        {description && <p>{description}</p>}
      </div>
      {menuItems && <Menu items={menuItems} />}
    </Wrapper>
  );
};

const Wrapper = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  padding: 7px 20px;
  border-bottom: 1px solid ${colors.lightgray};
  .list-item {
    &--middle {
      display: flex;
      flex-direction: column;
      margin-left: 15px;
    }
    &--middle-top {
      display: flex;
      align-items: center;
    }
  }

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${colors.primary};
    h3,
    .icon {
      color: ${colors.white};
    }
    .badge {
      background-color: ${colors.white};
      color: ${colors.primary};
    }
  }

  .icon {
  }
`;

export default ListItem;
