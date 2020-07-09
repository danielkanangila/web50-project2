import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";

import { useToolbar } from "../hooks/useToolbar";
import { formatToolBarSubMessages } from "../utils";
import { ImageCircle } from "../components";
import colors from "../config/colors";
import { channels } from "./../devData.js";
import { MessageContainer } from "../components/messages";

const Channel = () => {
  const toolbar = useToolbar();
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    const channel = fetchChannelInfo();
    setToolbar(channel);
  }, [location]);

  const fetchChannelInfo = () => {
    return channels.filter(
      (channel) => channel.id === parseInt(params.channel_id)
    )[0];
  };

  const setToolbar = (channelInfo) => {
    toolbar.setContent({
      title: channelInfo.name,
      subTitle: formatToolBarSubMessages(channelInfo.messages),
      Image: () => (
        <ImageCircle
          theme={{ background: colors.primary, color: colors.white }}
          iconName="hashtag"
        />
      ),
      shownBackNav: true,
    });
  };

  return (
    <Wrapper>
      <MessageContainer />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Channel;
