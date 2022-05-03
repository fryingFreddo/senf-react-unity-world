/** @format */

import React from "react";
import styled from "styled-components";
import {
  FlexWrapper,
  TertiaryButton,
  Button,
  Icon,
} from "senf-atomic-design-system";

const Wrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 200px;
  background-color: #f8f8f8;
  z-index: 10;
`;
const MenuSidebar = () => {
  return (
    <Wrapper>
      <FlexWrapper
        flexDirection="column"
        width="calc(100% - 40px)"
        margin="20px"
      >
        <TertiaryButton text="Normalview" />
        <TertiaryButton text="Topview" />
        <TertiaryButton text="Streetview" />

        <Button variant="primary" text="Save" />
      </FlexWrapper>
    </Wrapper>
  );
};

export default MenuSidebar;
