import React from "react";
import styled from "styled-components";

const PropertiesCardLayout = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0px 17px 4px rgba(217, 209, 255, 1);
  width: 500px;
  height: 250px;
`;

const PropertiesCardData = () => {
  return (
    <PropertiesCardLayout>
      <h1>Properties Card Data</h1>
    </PropertiesCardLayout>
  );
};

export default PropertiesCardData;
