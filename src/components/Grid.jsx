import Box from './Box'; // Replace with the correct import path

const GridOfBoxes = () => {
  const gridSize = 10;
  const boxComponents = [];

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const position = [i * -2, j * -2, 0]; // Adjust the spacing as needed
      const key = `box_${i}_${j}`;

      boxComponents.push(<Box key={key} position={position} scale={1}/>);
    }
  }

  return <>{boxComponents}</>;
};

export default GridOfBoxes;
