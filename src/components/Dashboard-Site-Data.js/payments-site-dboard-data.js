import React from "react";
import styled from "styled-components";

const PaymentsCardLayout = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0px 17px 4px rgba(217, 209, 255, 1);
  width: 500px;
  height: 250px;
`;

const PaymentsCardData = () => {
  return (
    <PaymentsCardLayout>
      <h1>Payments Card Data</h1>
    </PaymentsCardLayout>
  );
};

export default PaymentsCardData;
