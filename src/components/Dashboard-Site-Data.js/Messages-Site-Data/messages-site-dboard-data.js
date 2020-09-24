import React from "react";
import { db } from "../../../Firebase/index";

import styled from "styled-components";

const MessagesCardLayout = styled.div`
  background-color: #fff;
  border-radius: 10px;
  grid-column: 3 / 4;
  grid-row: 1 / 3;
  padding: 15px;
  overflow-y: scroll;
  padding: 15px;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }

  h1 {
    margin: 5px 12px 12px;
  }
`;

const Spacer = styled.div`
  margin: 60px 0;
`;

const HeaderContainer = styled.div`
  background-color: #fff;
  padding-top: 10px;
  position: absolute;
  top: 0;
  width: 94%;
  height: 7%;
`;

const MessageCardData = () => {
  return (
    <MessagesCardLayout>
      <HeaderContainer>
        <h1 style={{ fontSize: "24px" }}>Messages Data</h1>
      </HeaderContainer>
      <Spacer />
    </MessagesCardLayout>
  );
};

export default MessageCardData;
