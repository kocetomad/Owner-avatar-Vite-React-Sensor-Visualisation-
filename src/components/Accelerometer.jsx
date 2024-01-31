import { useState, useEffect } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const acceState = atom({
  key: "accelData", // unique ID (with respect to other atoms/selectors)
  default: { x: 0, y: 0, z: 0 }, // default value (aka initial value)
});

const getAcceState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const xyz = get(acceState);
    return xyz;
  },
});

const Accelerometer = () => {
  const [acceleration, setAcceleration] = useRecoilState(acceState);

  useEffect(() => {
    const handleMotion = (event) => {
      const { x, y, z } = event.acceleration;
      if(acceleration.x > 0.25 && x > 0){
        setAcceleration({ x, y, z });
      }

    };

    window.addEventListener("devicemotion", handleMotion);

    return () => {
      window.removeEventListener("devicemotion", handleMotion);
    };
  }, []);

  return (
    <div>
      <h2>Accelerometer Data</h2>
      <p>
        <strong>X:</strong> {acceleration.x}
      </p>
      <p>
        <strong>Y:</strong> {acceleration.y}
      </p>
      <p>
        <strong>Z:</strong> {acceleration.z}
      </p>
    </div>
  );
};

export { Accelerometer,acceState,getAcceState };
