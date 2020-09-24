import React from "react";
import styled from "styled-components";
import { Router } from "@reach/router";
import { AuthProvider } from "./shared/Auth";
// layout components
import Navigation from "./components/Navigation";
import BodyLayout from "./components/Body";
// page components
import Dashboard from "./pages/Dashboard";
import Faq from "./pages/Faq";
import Ledger from "./pages/Ledger";
import Messages from "./pages/Messages";
import Payments from "./pages/Payments";
import Properties from "./pages/Properties";
import Property from "./pages/Property";
import Login from "./pages/Login";

import Widget from "./components/widget";

// lets setup the layout here
const Layout = styled.div`
  background-color: #f5f6fa;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
  padding: 16px;
`;

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Navigation />
        <BodyLayout>
          <Widget />
          <Router style={{ width: "100%" }}>
            <Login path="/login" />
            <Dashboard path="/dashboard" />
            <Properties path="/properties" />
            <Ledger path="/ledger" />
            <Messages path="/messages" />
            <Payments path="/payments" />
            <Faq path="/faq" />
          </Router>
        </BodyLayout>
      </Layout>
    </AuthProvider>
  );
}

export default App;
