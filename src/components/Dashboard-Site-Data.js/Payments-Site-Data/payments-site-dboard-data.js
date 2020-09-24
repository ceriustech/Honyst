import React from "react";
import styled from "styled-components";

const PaymentsCardLayout = styled.div`
  background-color: #fff;
  border-radius: 10px;
  grid-column: 3 / 4;
  grid-row: 3 / 5;
  padding: 15px;
`;

const PaymentsCardData = () => {
  return (
    <PaymentsCardLayout>
      <h1 style={{ fontSize: "24px" }}>Payments Card Data</h1>
    </PaymentsCardLayout>
  );
};

export default PaymentsCardData;
