import React, { useState } from 'react';
import { useListData } from 'react-stately';
import './App.css';
import ErrorDisplay from './components/errorDisplay';
import ListDisplay from './components/listDisplay';
import ListEditor from './components/listEditor';
import ListHistory from './components/listHistory';
import { addAnimalFunction, Key } from './types';

//Collections of tailwind class names declared as constants to keep component renders easily readable.
// const wrapperClass:string = ;
const errorWrapperClass: string = 'bg-gray-600 flex justify-center';
const appWrapperClass: string =
  'bg-gray-600 text-violet-200 flex flex-wrap justify-center';
// const wrapperClass:string = ;

function App() {
  //basic error state
  const [hasError, setHasError] = useState(false);

  //initial state of animal collection
  let animals = [
    { name: 'Aardvark', id: 0, isDeleted: false },
    { name: 'Kangaroo', id: 1, isDeleted: false },
    { name: 'Snake', id: 2, isDeleted: false },
  ];

  //initial state of animal collection being set in useListData
  let list = useListData({
    initialItems: animals,
    initialSelectedKeys: ['Kangaroo'],
    getKey: (item) => item.id,
  });

  //check if any error occurs with useListData
  if (!list) {
    setHasError(true);
  } else {
    //updates isDeleted value of entry, simulating deletion from the state on the front end while still allowing other components to make use of the full and accurate data e.g. history component. applicable for moderated shared spaces including wikis and forms.
    function updateAnimal(
      id: Key,
      newValue: {
        name: string;
        id: number;
        isDeleted: boolean;
      }
    ) {
      list.update(id, {
        name: newValue.name,
        id: newValue.id,
        isDeleted: true,
      });
    }

    //adds user input animal to the state, main display, and history
    function addAnimal(id: addAnimalFunction) {
      list.append(id);
    }

    if (hasError) {
      // error has occurred, render this instead of expected components
      return (
        <>
          <div className={errorWrapperClass}>
            <ErrorDisplay />
          </div>
        </>
      );
    } else {
      // list is fine, render expected components
      return (
        <>
          <div className={appWrapperClass}>
            <ListDisplay ListData={list} onPressFunc={updateAnimal} />
            <ListHistory ListData={list} />
            <ListEditor ListData={list} addAnimal={addAnimal} />
          </div>
        </>
      );
    }
  }
}

export default App;
