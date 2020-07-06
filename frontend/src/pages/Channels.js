import React, { Fragment, useContext, useEffect } from "react";
import styled from "styled-components";
import * as Yup from "yup";

import ListItem from "../components/lists/ListItem";
import { Icon, ToolbarTitle, ImageCircle } from "../components";
import { Form, FormTextField } from "./../components/form";
import { useLocalStorage } from "./../hooks/useLocalStorage";
import {
  formatForBadge,
  formatToolBarSubMessages,
  sortByDate,
  sortByUnread,
} from "../utils";
import colors from "./../config/colors";
// To be replace by fetching data from server
import { channels } from "../devData.js";
import { AppContext } from "../contexts";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
});

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
  .create-channel {
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
    margin-bottom: 20px;
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
