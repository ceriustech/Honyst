import React from "react";
import styled from "styled-components";
import { db } from "../Firebase";

import LedgerCardData from "../components/Dashboard-Site-Data.js/Ledger-Site-Data/ledger-site-dboard-data";
import MessageCardData from "../components/Dashboard-Site-Data.js/Messages-Site-Data/messages-site-dboard-data";
import PaymentsCardData from "../components/Dashboard-Site-Data.js/Payments-Site-Data/payments-site-dboard-data";
import PropertiesCardData from "../components/Dashboard-Site-Data.js/Property-Site-Data/properties-site-dboard-data";

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
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 175px;
  grid-gap: 10px;
`;

function Dashboard({ children }) {
  return (
    <DashBoardLayout>
      <h1 style={{ fontSize: "28px" }}>My Dashboard</h1>
      <DashboardContent>
        <PropertiesCardData />
        <MessageCardData />
        <LedgerCardData />
        <PaymentsCardData />
      </DashboardContent>
    </DashBoardLayout>
  );
}
export default Dashboard;
