import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRecoilValue } from "recoil";
import { useEffect } from 'react';

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
  const [colour, setColour] = useState("red");
  const xyz = useRecoilValue(getAcceState);
  const { position,scale } = props;
  
  const unselect = () => {
    const colors = ["yellow", "green", "purple", "blue", "orange", "white"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const selectedColor = colors[randomIndex];
    setColour(selectedColor);
  };
  useEffect(() => {
    if(clicked == false){
      unselect()
    }
  }, [clicked])
  useEffect(() => {
    setColour("red");
  }, [])
  
  console.log(hovered);
  useFrame((state, delta) => {
    ref.current.rotation.x = ref.current.rotation.y += delta;
    if (clicked && xyz.x < -3) {
      ref.current.position.x += delta*5
    } 
    else if (clicked && xyz.x > 3) {
      console.log(position)
      ref.current.position.x -= delta*5
    }
    // if (clicked && xyz.y < -0.25) {
    //   ref.current.position.y += delta
    // }
    // if (clicked && xyz.y > 0.25) {
    //   console.log(position)
    //   ref.current.position.y -= delta
    // }
    // if (clicked && xyz.z < -0.25) {
    //   console.log(position)
    //   ref.current.scale.x -= delta/5
    //   ref.current.scale.y -= delta/5
    //   ref.current.scale.z -= delta/5
    // }
    // if (clicked && xyz.z > 0.25) {
    //   console.log(position)
    //   ref.current.scale.x += delta/5
    //   ref.current.scale.y += delta/5
    //   ref.current.scale.z += delta/5
    // }
    
  });
  return (
    <Select enabled={clicked}>
      <mesh
        ref={ref} 
        position={[position.x, position.y, position.z]}
        {...props}
        scale={scale}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        onClick={(event) => click(!clicked)}
      >
        <boxGeometry />
        <meshStandardMaterial color={colour} />
      </mesh>
    </Select>
  );
}

export default Box;
