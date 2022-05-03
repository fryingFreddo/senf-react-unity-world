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
        height="calc(100% - 40px)"
        margin="20px"
        gap="10px"
      >
        <img
          src={require("../assets/logo_yellow.png")}
          width="80px"
          style={{ margin: "20px 0px 75px 0px" }}
        />
        <Button variant="secondary" text="Normalview" />
        <Button variant="secondary" text="Topview" />
        <Button variant="secondary" text="Streetview" />
        <div style={{ marginTop: "auto" }}>
          <FlexWrapper flexDirection="column" gap="10px">
            <Button variant="secondary" text="Neustart" />

            <br />

            <Button variant="secondary" text="Rückgängig" />

            <Button variant="primary" text="Save" />
          </FlexWrapper>
        </div>
      </FlexWrapper>
    </Wrapper>
  );
};

export default MenuSidebar;
