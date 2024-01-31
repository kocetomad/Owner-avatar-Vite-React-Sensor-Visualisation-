import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Accelerometer from "./components/Accelerometer";
import ThreeGrid from "./components/Grid";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei'
import { Selection, Select, EffectComposer, Outline } from '@react-three/postprocessing'

import Box from "./components/Box";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="App-header">
        {/* Canvas 1 */}
        <Canvas dpr={[1, 2]}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Selection>
        <EffectComposer multisampling={8} autoClear={false}>
          <Outline blur visibleEdgeColor="white" edgeStrength={100} width={1000} />
        </EffectComposer>
        <Box position={[-1, 0, 3]} />
        <Box position={[1, 0, 0]} />
      </Selection>
      <OrbitControls />
    </Canvas>
      </section>
      <Accelerometer />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
