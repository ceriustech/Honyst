import React from "react";
import styled from "styled-components";
import { Router } from "@reach/router";
import Navigation from "./components/Navigation";
import BodyLayout from "./components/Body";

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

// first widget thought
const WidgetOne = styled.div`
  box-sizing: border-box;
  width: 100%;
  flex: ${(props) => props.flex};
  height: auto;
  padding: 16px;
  border-radius: 20px;
  background-color: ${(props) => props.bg};
  color: white;
`;

// this will get removed for actual pages later
const PageOne = () => (
  <WidgetOne flex={1} bg="#ff9f43">
    <h1>page one</h1>
  </WidgetOne>
);
const PageTwo = () => <h1>page two</h1>;
const PageThree = () => <h1>page three</h1>;
const PageFour = () => <h1>page four</h1>;
const PageFive = () => <h1>page five</h1>;

function App() {
  return (
    <Layout>
      <Navigation />
      <BodyLayout>
        <Router>
          <PageOne path="/one" />
          <PageTwo path="/two" />
          <PageThree path="/three" />
          <PageFour path="/four" />
          <PageFive path="/five" />
        </Router>
      </BodyLayout>
    </Layout>
  );
}

export default App;
