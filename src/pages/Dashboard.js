import React from "react";
import styled from "styled-components";

import LedgerCardData from "../components/Dashboard-Site-Data.js/ledger-site-dboard-data";

// this should be a dashboard component per the requirements
// i'd assume it is connected to different data so lets keep a top level state for it all.
// add widgets and such to visualize the data
// widgets can be removed and reusable possibly

const DashBoardLayout = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const DashboardContent = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: repeat(3, 150px);
  grid-gap: 10px;
`;

function Dashboard({ children }) {
  return (
    <DashBoardLayout>
      <h1>Dashboard</h1>
      <LedgerCardData />
      <DashboardContent>{children}</DashboardContent>
    </DashBoardLayout>
  );
}
export default Dashboard;
