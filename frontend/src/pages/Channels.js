import React, { Fragment, useContext, useEffect } from "react";
import styled from "styled-components";

import ListItem from "../components/lists/ListItem";
import { Icon, ToolbarTitle, ImageCircle } from "../components";
import { useLocalStorage } from "./../hooks/useLocalStorage";
import { formatForBadge, formatToolBarSubMessages } from "../utils";
import colors from "./../config/colors";
// To be replace by fetching data from server
import { channels } from "../devData.js";
import { AppContext } from "../contexts";

const Channels = () => {
  const [savedChannel, saveChannel] = useLocalStorage("channel");
  const { appState, setAppState } = useContext(AppContext);

  useEffect(() => {
    setToolbarTile(savedChannel);
  }, []);

  const setToolbarTile = (channelInfo) => {
    saveChannel(channelInfo);
    setAppState({
      ...appState,
      ToolbarTitle: () => (
        <ToolbarTitle
          title={channelInfo.name}
          subTitle={formatToolBarSubMessages(channelInfo.messages)}
          Image={
            <ImageCircle
              theme={{ background: colors.primary, color: colors.white }}
              iconName="hashtag"
            />
          }
        />
      ),
    });
  };

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
              onClick={() => setToolbarTile(channel)}
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
