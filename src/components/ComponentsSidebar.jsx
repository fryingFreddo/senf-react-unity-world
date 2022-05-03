/** @format */

import React from "react";
import styled from "styled-components";
import {
  FlexWrapper,
  LayerWhiteFirstDefault,
  Typography,
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

const Circle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;

  ${(props) => LayerWhiteFirstDefault}
`;
const ComponentsSidebar = ({ unityContent }) => {
  function spawnEnemies(amount) {
    unityContent.send("BuildingManager", "SpawnObject", amount);
  }
  return (
    <Wrapper>
      <FlexWrapper width="calc(100% - 40px)" margin="20px">
        <FlexWrapper flexDirection="column" alignItems="center">
          <Circle></Circle>
          <Typography variant="bodyBg">Modelle</Typography>
        </FlexWrapper>
        <FlexWrapper flexDirection="column" alignItems="center">
          <Circle></Circle>
          <Typography variant="bodyBg">Formen</Typography>
        </FlexWrapper>
        <FlexWrapper flexDirection="column" alignItems="center">
          <Circle></Circle>
          <Typography variant="bodyBg">Marker</Typography>
        </FlexWrapper>
      </FlexWrapper>
      <OrganizationCard onClick="" />
      <button onClick={() => spawnEnemies(0)}>Spawn!</button>
    </Wrapper>
  );
};

export default ComponentsSidebar;
