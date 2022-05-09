/** @format */
import * as React from 'react';
import "./App.css";
import Unity, { UnityContext } from "react-unity-webgl";
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
import { useEffect, useState } from "react";

const unityContext = new UnityContext({
  loaderUrl: "Build/WebGL_Build_v3.loader.js",
  dataUrl: "Build/WebGL_Build_v3.data",
  frameworkUrl: "Build/WebGL_Build_v3.framework.js",
  codeUrl: "Build/WebGL_Build_v3.wasm",
  webglContextAttributes: {
    preserveDrawingBuffer: true,
  },
});
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
  const [objSelected, setIsObjSelected] = useState(true);
  useEffect(function () {
    unityContext.on("isObjActive", function (isActive) {
      setIsObjSelected(isActive);
      if (isActive) { console.log("Object depending on Context Menu is Active"); }
      else if (!isActive) { console.log("Deselection or non Context Menu dependent Object selected"); }
    });
  }, []);
  /*//#region spawn objects
  function spawnCube() {
    unityContext.send("BuildingManager", "SpawnObject", 0);
  }
  function spawnSphere() {
    unityContext.send("BuildingManager", "SpawnObject", 1);
  }
  function spawnCylinder() {
    unityContext.send("BuildingManager", "SpawnObject", 2);
  }
  function spawnMarker() {
    unityContext.send("BuildingManager", "SpawnObject", 3);
  }
  //#endregion
  //#region marker toggle
  function hideMarkers() {
    unityContext.send("Canvas", "HideMarkers");
  }
  function ShowMarkers() {
    unityContext.send("Canvas", "ShowMarkers");
  }
  //#endregion
  //#region Switch Cams
  function switchToTopView() {
  
    unityContext.send("Canvas", "SwitchToTopView");
  }
  
  function switchToNormalView() {
  
    unityContext.send("Canvas", "SwitchToNormalView");
  }
  
  function switchToStreetView() {
  
    unityContext.send("Canvas", "SwitchToStreetView");
  }
  //#endregion
  //#region ObjectContextMenu
  
  function setTag(index) {
    unityContext.send("BuildingManager", "setTag", index); // 0 = Wohnen; 1= Buero; 2 = Kultur
  }
  
  function deleteObject() {
    unityContext.send("BuildingManager", "DestroyObject");
  }
  
  function scaleObject(newValue) {
    unityContext.send("BuildingManager", "ScaleSliderUpdate", newValue);
  }
  
  function rotateObject(newValue) {
    unityContext.send("BuildingManager", "RotateSliderUpdate", newValue);
  }
  //#endregion
  
  //#region einreichen
  function handInProposal() {
    unityContext.send("Canvas", "TakeScreenshot");
    unityContext.send("Canvas", "CreateText");
  }
  //#endregion */
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <MenuSidebar
          componentsSidebarOpen={componentsSidebarOpen}
          setComponentsSidebarOpen={setComponentsSidebarOpen}
        />
        <ComponentsSidebar
          componentsSidebarOpen={componentsSidebarOpen}
          setComponentsSidebarOpen={setComponentsSidebarOpen}
        />
        <UnityWrapper>
          <Unity className="unity-canvas" unityContext={unityContext} />
        </UnityWrapper>
      </div>
    </ThemeProvider>
  );
};

export default App;
