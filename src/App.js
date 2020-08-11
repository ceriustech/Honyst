import React from "react";
import styled from "styled-components";
import { Router } from "@reach/router";
import Navigation from "./components/Navigation";

// lets setup the layout here
const Layout = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
  padding: 16px;
`;

// this will get removed for actual pages later

const PageOne = () => <h1>page one</h1>;
const PageTwo = () => <h1>page two</h1>;
const PageThree = () => <h1>page three</h1>;
const PageFour = () => <h1>page four</h1>;
const PageFive = () => <h1>page five</h1>;

function App() {
  return (
    <Layout>
      <Navigation />
      <Router>
        <PageOne path="/one" />
        <PageTwo path="/two" />
        <PageThree path="/three" />
        <PageFour path="/four" />
        <PageFive path="/five" />
      </Router>
    </Layout>
  );
}

export default App;
