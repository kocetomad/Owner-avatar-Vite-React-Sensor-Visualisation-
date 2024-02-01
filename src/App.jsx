import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Accelerometer } from "./components/Accelerometer";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AccelerometerChecker from "./components/AccelerometerChecker";
import {
  Selection,
  EffectComposer,
  Outline,
} from "@react-three/postprocessing";
import GridOfBoxes from "./components/Grid"
import "./App.css";
import {
  RecoilRoot
} from 'recoil';

function App() {

  return (
    <RecoilRoot>
      <section className="App-header">
        {/* Canvas 1 */}
        <AccelerometerChecker/>
        <Accelerometer />
        <h2>You can rotate zoom and move the 3D canvas</h2>
        <div style={{height: "80vh", backgroundColor: "#53474e"}}>
        <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
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
        <a href="https://recoiljs.org/" target="_blank">
          <img src="https://cdn.worldvectorlogo.com/logos/recoil-js.svg" className="logo react" alt="Recoil logo" />
        </a>
        <a href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction" target="_blank">
          <img src="https://global.discourse-cdn.com/standard17/uploads/threejs/original/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751.png" className="logo react" alt="Three logo" />
        </a>
      </div>
      <h1>Vite + React + RecoilJS + React Three Fiber</h1>
      </RecoilRoot>
  );
}

export default App;
