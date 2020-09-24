import React from "react";
import styled from "styled-components";

const MessagesCardLayout = styled.div`
  background-color: #fff;
  border-radius: 10px;
  grid-column: 3 / 4;
  grid-row: 1 / 3;
  padding: 15px;
`;

const MessageCardData = () => {
  return (
    <MessagesCardLayout>
      <h1 style={{ fontSize: "24px" }}>Message Card Data</h1>
    </MessagesCardLayout>
  );
};

export default MessageCardData;
