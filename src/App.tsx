import React, { useState } from 'react';
import { useListData } from 'react-stately';
import './App.css';
import ErrorDisplay from './components/errorDisplay';
import ReactAriaComponent from './components/ReactAriaComponent/ReactAriaComponent';
import { AppErrorType, addAnimalFunction, Key } from './types';

//Collections of tailwind class names declared as constants to keep component renders easily readable.
// const wrapperClass:string = ;
const errorWrapperFragment: string =
  'errorWrapperFragment' + ' ' + 'bg-gray-600' + ' ' + 'flex justify-center';

// const wrapperClass:string = ;

const App: React.FC<AppErrorType> = ({ hasErrorTest }) => {
  //basic error state
  const [hasError, setHasError] = useState(false);

  //check if any error occurs with useListData
  if (hasError || hasErrorTest == true) {
    // error has occurred, render this instead of expected components
    return (
      <>
        <div className={errorWrapperFragment}>
          <ErrorDisplay />
        </div>
      </>
    );
  } else {
    // list is fine, render expected components
    return (
      <>
        <ReactAriaComponent />
      </>
    );
  }
};

export default App;
