/** @format */

import "./App.css";
import Unity, { UnityContent } from "react-unity-webgl";
const unityContent = new UnityContent(
  "build/WebGLBuild.json",
  "build/UnityLoader.js"
);
function App() {
  function spawnEnemies(amount) {
    unityContent.send("BuildingManager", "SpawnObject", amount);
  }
  return (
    <div className="App">
      <button onClick={() => spawnEnemies(0)}>Spawn!</button>

      <Unity
        unityContent={unityContent}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default App;
