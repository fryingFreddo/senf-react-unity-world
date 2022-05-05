/** @format */

import "./App.css";
import { useState } from "react";
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
import { ThemeProvider } from "styled-components";

const unityContent = new UnityContent(
  "build/WebGLBuild.json",
  "build/UnityLoader.js"
);
const UnityWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 0px;
  background-color: #f8f8f8;
  z-index: 8;
`;
const App = () => {
  const [componentsSidebarOpen, setComponentsSidebarOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <MenuSidebar
          componentsSidebarOpen={componentsSidebarOpen}
          setComponentsSidebarOpen={setComponentsSidebarOpen}
        />
        <ComponentsSidebar
          unityContent={unityContent}
          componentsSidebarOpen={componentsSidebarOpen}
          setComponentsSidebarOpen={setComponentsSidebarOpen}
        />
        <UnityWrapper>
          <Unity unityContent={unityContent} width="100%" height="100%" />
        </UnityWrapper>
      </div>
    </ThemeProvider>
  );
};

export default App;
