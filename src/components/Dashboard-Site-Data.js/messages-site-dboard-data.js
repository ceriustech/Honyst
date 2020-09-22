import React from "react";
import styled from "styled-components";

const MessagesCardLayout = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0px 17px 4px rgba(217, 209, 255, 1);
  width: 500px;
  height: 450px;
`;

const MessageCardData = () => {
  return (
    <MessagesCardLayout>
      <h1>Message Card Data</h1>
    </MessagesCardLayout>
  );
};

export default MessageCardData;
