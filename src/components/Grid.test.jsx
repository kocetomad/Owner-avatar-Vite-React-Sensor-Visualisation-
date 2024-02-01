import { expect, test, describe, it } from 'vitest'
import { sum } from './Grid'
import { render } from '@testing-library/react';
import GridOfBoxes from './Grid'
import AccelerometerChecker from './AccelerometerChecker';
import App from '../App';

// describe('MyComponent', () => {
//   it('mounts successfully', () => {
//     const { getByText } = render(<GridOfBoxes />);

//     // Check if the component renders its content
//     expect(getByText('Hello, world!')).toBeTruthy();
//   });
// });

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

