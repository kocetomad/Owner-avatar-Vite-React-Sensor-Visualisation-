import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRecoilValue } from "recoil";

import { getAcceState } from "./Accelerometer";
import {
  Selection,
  Select,
  EffectComposer,
  Outline,
} from "@react-three/postprocessing";

function Box(props) {
  const ref = useRef();
  const [hovered, hover] = useState(null);
  const [clicked, click] = useState(false);
  const xyz = useRecoilValue(getAcceState)

  console.log(hovered);
  useFrame(
    (state, delta) => {(ref.current.rotation.x = ref.current.rotation.y += delta)
    if(clicked){
      console.log(xyz)
    }
    });
  return (
    <Select enabled={hovered}>
      <mesh
        ref={ref}
        {...props}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        onClick={(event) => click(!clicked)}
      >
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
    </Select>
  );
}

export default Box;
