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
  width: 97%;
  height: 7%;
`;

const PropertiesCardData = (props) => {
  return (
    <PropertiesCardLayout>
      <HeaderContainer>
        <h1 style={{ fontSize: "24px" }}>Properties Data</h1>
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
