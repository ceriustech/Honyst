import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faWind,
  faFolder,
  faSlidersH,
  faEnvelope,
  faSignOutAlt,
  faHeading,
} from "@fortawesome/free-solid-svg-icons";

// setups of navigation base
const NavWrapper = styled.div`
  width: 100px;
  height: 100%;
  background-color: #341f97;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
`;

// is the centered menu group of icons
const Menu = styled.div`
  width: 100%;
  max-height: 30%;
  flex: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// basic nav icon
const Item = styled(Link)`
  box-sizing: border-box;
  padding: 32px 0;
  width: 100%;
  flex: ${(props) => props.flex};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  &:hover {
    background-color: #74b9ff;
  }
`;

export default function Navigation(props) {
  return (
    <NavWrapper>
      <Item to="/">
        <FontAwesomeIcon icon={faHeading} />
      </Item>
      <Menu>
        <Item flex={1} to="/one">
          <FontAwesomeIcon icon={faWind} />
        </Item>
        <Item flex={1} to="/two">
          <FontAwesomeIcon icon={faDesktop} />
        </Item>
        <Item flex={1} to="/three">
          <FontAwesomeIcon icon={faFolder} />
        </Item>
        <Item flex={1} to="/four">
          <FontAwesomeIcon icon={faSlidersH} />
        </Item>
        <Item flex={1} to="/five">
          <FontAwesomeIcon icon={faEnvelope} />
        </Item>
      </Menu>
      <Item to="/signout">
        <FontAwesomeIcon icon={faSignOutAlt} />
      </Item>
    </NavWrapper>
  );
}

