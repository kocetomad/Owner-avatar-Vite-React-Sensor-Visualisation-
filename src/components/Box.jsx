import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Selection, Select, EffectComposer, Outline } from '@react-three/postprocessing'

function Box(props) {
  const ref = useRef()
  const [hovered, hover] = useState(null)
  console.log(hovered)
  useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta))
  return (
    <Select enabled={hovered}>
      <mesh ref={ref} {...props} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
    </Select>
  )
}
 
export default Box;