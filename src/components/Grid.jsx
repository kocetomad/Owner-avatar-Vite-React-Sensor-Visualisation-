import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeGrid = () => {
  const sceneRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();
  const cubeRef = useRef();

  useEffect(() => {
    // Initialize Three.js components
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    const cubeGeometry = new THREE.BoxGeometry(); // Create a cube geometry
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Green color
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial); // Create a cube mesh

    scene.add(cube);

    camera.position.z = 5;

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    cubeRef.current = cube;

    // Add renderer to the DOM
    document.body.appendChild(renderer.domElement);

    // Handle resize events
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      renderer.setSize(innerWidth, innerHeight);
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup: Remove event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

//   useEffect(() => {
//     // Update Three.js scene based on accelerometer data
//     const handleMotion = (event) => {
//       const { x, y, z } = event.acceleration;

//       // Map accelerometer data to cube rotation
//       cubeRef.current.rotation.x = x;
//       cubeRef.current.rotation.y = y;
//       cubeRef.current.rotation.z = z;

//       // Render the updated scene
//       rendererRef.current.render(sceneRef.current, cameraRef.current);
//     };

//     window.addEventListener('devicemotion', handleMotion);

//     // Cleanup: Remove event listener when the component unmounts
//     return () => {
//       window.removeEventListener('devicemotion', handleMotion);
//     };
//   }, []);

  return null; // No need to render anything in the React component
};

export default ThreeGrid;
