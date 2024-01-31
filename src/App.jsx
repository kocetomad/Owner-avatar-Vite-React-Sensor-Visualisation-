import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Accelerometer from "./components/Accelerometer";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
  Selection,
  Select,
  EffectComposer,
  Outline,
} from "@react-three/postprocessing";
import GridOfBoxes from "./components/Grid"
import Box from "./components/Box";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="App-header">
        {/* Canvas 1 */}
        <Accelerometer />
        <div style={{height: "50vh", backgroundColor: "#53474e"}}>
        <Canvas>
          <ambientLight intensity={3} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Selection>
            <EffectComposer multisampling={8} autoClear={false}>
              <Outline
                blur
                visibleEdgeColor="white"
                edgeStrength={100}
                width={1000}
              />
            </EffectComposer>
            <GridOfBoxes />
          </Selection>
          <OrbitControls />
        </Canvas>
        </div>
      </section>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
