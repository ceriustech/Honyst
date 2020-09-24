import React from "react";
import styled from "styled-components";

const LedgerCardLayout = styled.div`
  background: #fff;
  border-radius: 10px;
  grid-column: 1 / 3;
  grid-row: 3 / 5;
  padding: 15px;
`;

const LedgerCardData = () => {
  return (
    <LedgerCardLayout>
      <h1 style={{ fontSize: "24px" }}>Ledger Card Data</h1>
    </LedgerCardLayout>
  );
};

export default LedgerCardData;
