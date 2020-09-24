import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { size } from "polished";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: ${(props) => (props.open ? "calc(100% - 64px)" : "calc(64px + 8px)")};
  overflow: hidden;
  transition: all 0.45s ease-in-out;
`;

const Button = styled.button`
  box-sizing: border-box;
  margin-top: 8px;
  background-color: ${(props) => props.theme.colors.primary};
  ${size("64px")};
  border-radius: 50%;
  min-height: 64px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  &:first-child {
    background-image: url("https://avatars3.githubusercontent.com/u/18262510?s=460&u=f458799a50c4f4dcf3fa4610854db3c76b348c58&v=4");
    background-size: cover;
    background-position: center;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.sHover};
  }
`;

export default function Widget() {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper open={open}>
      <Button
        onClick={() => {
          console.log("FIRED");
          setOpen(!open);
        }}
      />
      <Button>
        <FontAwesomeIcon icon={faBuilding} />
      </Button>
      <Button />
      <Button />
      <Button />
      <Button />
    </Wrapper>
  );
}
