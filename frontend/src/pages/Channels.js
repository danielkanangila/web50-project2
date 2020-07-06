import React, { Fragment, useEffect } from "react";
import styled from "styled-components";
import * as Yup from "yup";

import ListItem from "../components/lists/ListItem";
import { Icon, ImageCircle } from "../components";
import { Form, FormTextField } from "./../components/form";
import { useLocalStorage } from "./../hooks/useLocalStorage";
import {
  formatForBadge,
  sortByUnread,
  formatToolBarSubMessages,
} from "../utils";
import colors from "./../config/colors";
import { useToolbar } from "../hooks/useToolbar";
// To be replace by fetching data from server
import { channels } from "../devData.js";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
});

const Channels = () => {
  const [savedChannel, saveChannel] = useLocalStorage("channel");
  const toolbar = useToolbar();

  useEffect(() => {
    setToolbarTile(savedChannel);
  }, []);

  const setToolbarTile = (channelInfo) => {
    saveChannel(channelInfo);
    toolbar.setContent({
      title: channelInfo.name,
      subTitle: formatToolBarSubMessages(channelInfo.messages),
      Image: () => (
        <ImageCircle
          theme={{ background: colors.primary, color: colors.white }}
          iconName="hashtag"
        />
      ),
    });
  };

  return (
    <Wrapper className="section">
      <Form
        className="create-channel"
        initialValues={{ name: "" }}
        onSubmit={(data) => console.log(data)}
        validationSchema={validationSchema}
      >
        <FormTextField
          name="name"
          label="Name"
          type="text"
          Icon={<Icon name="hashtag" />}
          placeholder="Name"
        />
        <button className="btn btn-primary btn-small">Create</button>
      </Form>
      <h2>Channels</h2>
      <div className="list">
        {sortByUnread(channels, "messages").map((channel) => (
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
  .create-channel {
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
    position: relative;

    input {
      padding-top: 10px;
      padding-bottom: 10px;
      width: calc(100% - 56px);
    }
    .btn {
      position: absolute;
      top: 10px;
      right: 20px;
    }
  }
`;

export default Channels;
