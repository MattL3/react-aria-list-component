import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import App from './App';

describe('App Component', () => {
  it('renders an error', () => {
    render(<App hasErrorTest={true} />);
    screen.debug(); // Logs the DOM structure
    const element = screen.getByText('error');
    expect(element).toBeInTheDocument();
  });
  it('renders correctly', () => {
    render(<App hasErrorTest={false} />);
    screen.debug(); // Logs the DOM structure
    const element = screen.getByText('test');
    expect(element).toBeInTheDocument();
  });
});

// import { createRoot } from 'react-dom/client';
// import { cleanup, render, screen } from '@testing-library/react';
// import App from './App';
// import { AppErrorType, addAnimalFunction, Key } from './types';

// const props: AppErrorType = { hasErrorTest: false };
// // afterEach(() => {
// //   cleanup();
// // });
// // test('renders base level app', () => {
// //   act(() => {
// //     <App {...props} />;
// //   });
// //   const linkElement = screen.getByText('test');
// //   expect(linkElement).toBeInTheDocument();
// // });
// // test('renders base level app error', () => {
// //   act(() => {
// //     <App {...props} />;
// //   });
// //   // const linkElement = screen.getByText('Error');
// //   // expect(linkElement).toBeInTheDocument();
// // });

// // let container = null;
// const container = document.getElementById('app');
// if (container == null) {
//   console.log('null');
// } else {
//   console.log('not null');
//   const root = createRoot(container); // createRoot(container!) if you use TypeScript
//   root.render(<App {...props} />);
//   beforeEach(() => {
//     // setup a DOM element as a render target
//     document.body.appendChild(container);
//   });

//   afterEach(() => {
//     // cleanup on exiting
//     root.unmount();
//   });

//   it('renders with or without a name', () => {
//     act(() => {
//       render(<App {...props} />);
//     });
//     expect(container.textContent).toBe('test');
//   });
// }
