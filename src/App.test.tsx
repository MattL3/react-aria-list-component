import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { cleanup, render, screen } from '@testing-library/react';
import App from './App';
import { AppErrorType, addAnimalFunction, Key } from './types';

const props: AppErrorType = { hasErrorTest: false };
// afterEach(() => {
//   cleanup();
// });
// test('renders base level app', () => {
//   act(() => {
//     <App {...props} />;
//   });
//   const linkElement = screen.getByText('test');
//   expect(linkElement).toBeInTheDocument();
// });
// test('renders base level app error', () => {
//   act(() => {
//     <App {...props} />;
//   });
//   // const linkElement = screen.getByText('Error');
//   // expect(linkElement).toBeInTheDocument();
// });

// let container = null;
const container = document.getElementById('app');
if (container == null) {
  console.log('null');
} else {
  console.log('not null');
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(<App {...props} />);
  beforeEach(() => {
    // setup a DOM element as a render target
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    root.unmount();
  });

  it('renders with or without a name', () => {
    act(() => {
      render(<App {...props} />);
    });
    expect(container.textContent).toBe('test');
  });
}
