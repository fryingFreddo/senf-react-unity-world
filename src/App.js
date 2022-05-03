/** @format */

import "./App.css";
import Unity, { UnityContent } from "react-unity-webgl";
import MenuSidebar from "./components/MenuSidebar";
import ComponentsSidebar from "./components/ComponentsSidebar";
import styled from "styled-components";
import {
  theme,
  GlobalStyle,
  Icon,
  Button,
  Input,
  OrganizationCard,
  Auth,
} from "senf-atomic-design-system";
import { useState } from "react";
import { ThemeProvider } from "styled-components";

const unityContent = new UnityContent(
  "build/WebGLBuild.json",
  "build/UnityLoader.js"
);
const UnityWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: calc(100vw - 600px);
  left: 600px;
  background-color: #f8f8f8;
  z-index: 10;
`;
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <MenuSidebar />
        <ComponentsSidebar unityContent={unityContent} />
        <UnityWrapper>
          <Unity unityContent={unityContent} width="100%" height="100%" />
        </UnityWrapper>
      </div>
    </ThemeProvider>
  );
}

export default App;
