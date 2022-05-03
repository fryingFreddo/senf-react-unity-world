/** @format */

import React from "react";
import styled from "styled-components";
import {
  FlexWrapper,
  TertiaryButton,
  Button,
  Icon,
  OrganizationCard,
} from "senf-atomic-design-system";
const Wrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 400px;
  left: 200px;
  background-color: #fed957;
  z-index: 10;
`;
const ComponentsSidebar = ({ unityContent }) => {
  function spawnEnemies(amount) {
    unityContent.send("BuildingManager", "SpawnObject", amount);
  }
  return (
    <Wrapper>
      <OrganizationCard onClick="" />
      <button onClick={() => spawnEnemies(0)}>Spawn!</button>
    </Wrapper>
  );
};

export default ComponentsSidebar;
