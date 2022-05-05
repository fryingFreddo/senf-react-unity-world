/** @format */

import React from "react";
import styled from "styled-components";
import {
  FlexWrapper,
  TertiaryButton,
  Button,
  Icon,
  Tag,
  RoundedButton,
} from "senf-atomic-design-system";

const Wrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 200px;
  background-color: #f8f8f8;
  z-index: 10;
`;

const RoundedButtonWrapper = styled.div`
  position: fixed;
  top: 50vh;

  transform: ${({ componentsSidebarOpen }) =>
    componentsSidebarOpen
      ? "translate(-50%, -50%) rotate(45deg)"
      : "translate(-50%, -50%)"};
  left: ${({ componentsSidebarOpen }) =>
    componentsSidebarOpen ? "600px" : "200px"};
  transition: 0.5s ease-out;
`;
const tags = [
  { name: "Normalview", color: "green" },
  { name: "Topview", color: "green" },
  { name: "Streetview", color: "green" },
];
const MenuSidebar = ({ componentsSidebarOpen, setComponentsSidebarOpen }) => {
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
          style={{ margin: "20px 0px 65px 0px" }}
        />
        {/* <Button variant="secondary" text="Normalview" />
        <Button variant="secondary" text="Topview" />
        <Button variant="secondary" text="Streetview" /> */}
        <FlexWrapper flexDirection="column" gap="10px">
          <Button variant="secondary" text="Info" icon="infoFill" />
          <Button variant="secondary" text="Neustart" />
        </FlexWrapper>

        <FlexWrapper
          gap="10px"
          width="calc(100% - 20px)"
          margin="140px 10px 10px 0px"
          justifyContent="flex-start"
          alignItems="center"
          flexWrap="wrap"
        >
          {tags.map(({ name, color }) => (
            <Tag icon="dot" color={color} text={name} />
          ))}
        </FlexWrapper>
        <Button variant="secondary" size="small" icon="check" text="Marker " />

        <RoundedButtonWrapper componentsSidebarOpen={componentsSidebarOpen}>
          <RoundedButton
            variant="plus"
            onClick={() => setComponentsSidebarOpen(!componentsSidebarOpen)}
          />
        </RoundedButtonWrapper>
        <div style={{ marginTop: "auto" }}>
          <FlexWrapper flexDirection="column" gap="10px">
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
