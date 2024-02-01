import React from 'react'; // Make sure this line is at the top of your file
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AccelerometerChecker from './AccelerometerChecker';

describe('AccelerometerChecker', () => {
  it('mounts successfully', () => {
    const { getByText } = render(<AccelerometerChecker />);

    // Expect the component to render something about the accelerometer.
    // This is a basic test to ensure mounting; more detailed tests can follow.
    expect(getByText(/Accelerometer (present|not available on desktop)/i)).toBeInTheDocument();
  });
});