import React from "react";
import styled from "styled-components";

const PaymentsCardLayout = styled.div`
  background-color: #fff;
  border-radius: 10px;
  grid-column: 3 / 4;
  grid-row: 3 / 5;
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

const PaymentsCardData = () => {
  return (
    <PaymentsCardLayout>
      <HeaderContainer>
        <h1 style={{ fontSize: "24px" }}>Payments Data</h1>
      </HeaderContainer>
      <Spacer />{" "}
    </PaymentsCardLayout>
  );
};

export default PaymentsCardData;
