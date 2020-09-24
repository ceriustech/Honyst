import React from "react";
import styled from "styled-components";

import PropertyItemData from "./property-item-data";

const PropertiesCardLayout = styled.div`
  background-color: #fff;
  border-radius: 10px;
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  overflow-y: scroll;
  padding: 15px;
  position: relative;

  h1 {
    margin: 5px 12px 12px;
  }

  ::-webkit-scrollbar-track {
    border: 1px solid #000;
    padding: 2px 0;
    background-color: #404040;
  }
`;

const Spacer = styled.div`
  margin: 60px 0;
`;

const HeaderContainer = styled.div`
  background-color: #fff;
  padding-top: 10px;
  position: fixed;
  top: 128px;
  width: 57%;
  height: 7%;
`;

const PropertiesCardData = (props) => {
  return (
    <PropertiesCardLayout>
      <HeaderContainer>
        <h1 style={{ fontSize: "24px" }}>Properties Card Data</h1>
      </HeaderContainer>
      <Spacer />
      <PropertyItemData />
      <PropertyItemData />
      <PropertyItemData />
      <PropertyItemData />
      <PropertyItemData />
    </PropertiesCardLayout>
  );
};

export default PropertiesCardData;
