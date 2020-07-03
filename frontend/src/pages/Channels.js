import React, { Fragment } from "react";
import styled from "styled-components";

import ListItem from "../components/lists/ListItem";
import { Icon } from "../components";
import { formatForBadge, formatToolBarSubMessages } from "../utils";
// To be replace by fetching data from server
import { channels } from "../devData.js";

const Channels = () => {
  return (
    <Wrapper>
      <h2>Channels</h2>
      <div className="list">
        {channels.map((channel) => (
          <Fragment key={channel.id}>
            <ListItem
              title={`${channel.name}`}
              to={`/user/channels/${channel.id}`}
              highlight={channel.messages ? true : false}
              badgeContent={formatForBadge(channel.messages)}
              Image={<Icon name="hashtag" />}
            />
          </Fragment>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 2px;
  h2 {
    font-size: 1.2rem;
    padding: 0 20px 20px;
  }
  .list-item {
    width: 100%auto;
    h3 {
      font-weight: normal;
    }
    &.highlight {
      h3 {
        font-weight: bold;
      }
    }
    &--middle {
      width: 100%;
    }
    &--middle-top {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default Channels;
