import React from "react";
//import styled from "styled-components";

// this should be a dashboard component per the requirements
// i'd assume it is connected to different data so lets keep a top level state for it all.
// add widgets and such to visualize the data
// widgets can be removed and reusable possibly

function Dashboard({ children }) {
  return (
    <>
      <h1>Dashboard</h1>
      {children}
    </>
  );
}
export default Dashboard;
