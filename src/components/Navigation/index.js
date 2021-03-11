import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faBuilding,
  faBook,
  faMoneyCheckAlt,
  faEnvelope,
  faSignOutAlt,
  faHeading,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

// setups of navigation base
const NavWrapper = styled.div`
  width: 100px;
  min-width: 80px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
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
    background-color: ${(props) => props.theme.colors.pHover};
  }
`;

export default function Navigation(props) {
  return (
    <NavWrapper>
      <Item to="/">
        <FontAwesomeIcon icon={faHeading} />
      </Item>
      <Menu>
        <Item flex={1} to="/dashboard">
          <FontAwesomeIcon icon={faDesktop} />
        </Item>
        <Item flex={1} to="/properties">
          <FontAwesomeIcon icon={faBuilding} />
        </Item>
        <Item flex={1} to="/ledger">
          <FontAwesomeIcon icon={faBook} />
        </Item>
        <Item flex={1} to="/messages">
          <FontAwesomeIcon icon={faEnvelope} />
        </Item>
        <Item flex={1} to="/payments">
          <FontAwesomeIcon icon={faMoneyCheckAlt} />
        </Item>
        <Item flex={1} to="/faq">
          <FontAwesomeIcon icon={faQuestionCircle} />
        </Item>
      </Menu>
      <Item to="/signout">
        <FontAwesomeIcon icon={faSignOutAlt} />
      </Item>
    </NavWrapper>
  );
}
