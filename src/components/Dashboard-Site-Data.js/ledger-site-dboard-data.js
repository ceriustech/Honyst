import React from "react";
import styled from "styled-components";

const LedgerCardLayout = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0px 17px 4px rgba(217, 209, 255, 1);
  width: 850px;
  height: 250px;
`;

const LedgerCardData = () => {
  return (
    <LedgerCardLayout>
      <h1>Ledger Card Data</h1>
    </LedgerCardLayout>
  );
};

export default LedgerCardData;
