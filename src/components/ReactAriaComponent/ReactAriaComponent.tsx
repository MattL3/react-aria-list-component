import React, { useState } from 'react';
import { useListData } from 'react-stately';
import ErrorDisplay from '../errorDisplay';
import ListDisplay from './listDisplay';
import ListEditor from './listEditor';
import ListHistory from './listHistory';
import { addAnimalFunction, Key } from '../../types';
import { motion } from 'motion/react';

//Collections of tailwind class names declared as constants to keep component renders easily readable.
// const wrapperClass:string = ;
//
const errorWrapperFragment: string =
  'errorWrapperFragment' + ' ' + 'bg-gray-600' + ' ' + 'flex justify-center';
//

//
const appWrapperFragment: string =
  'appWrapperFragment' +
  ' ' +
  'bg-gray-600 max-w-' +
  ' ' +
  'flex flex-wrap justify-center flex-col items-center';
//

//
const listsWrapperFragment: string =
  'listsWrapperFragment' +
  ' ' +
  'w-full' +
  ' ' +
  'flex flex-nowrap justify-center flex-row';
//

//
const wrapperFragment: string =
  'wrapperFragment' +
  ' ' +
  'rounded-lg' +
  ' ' +
  'w-full' +
  ' ' +
  'm-2' +
  ' ' +
  'min-w-96 md:max-w-initial lg:max-w-248' +
  ' ' +
  'flex flex-wrap justify-center flex-col items-center';
//
// const wrapperFragment:string = ;

const ReactAriaComponent = () => {
  //basic error state
  const [hasError, setHasError] = useState(false);

  //initial state of animal collection
  const animals = [
    { name: 'Aardvark', id: 0, isDeleted: false },
    { name: 'Kangaroo', id: 1, isDeleted: false },
    { name: 'Snake', id: 2, isDeleted: false },
  ];

  //initial state of animal collection being set in useListData
  const list = useListData({
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
          <div className={errorWrapperFragment}>
            error
            <ErrorDisplay />
          </div>
        </>
      );
    } else {
      // list is fine, render expected components
      return (
        <>
          <div className={wrapperFragment}>
            <div className={listsWrapperFragment}>
              <ListDisplay ListData={list} onPressFunc={updateAnimal} />
              <ListHistory ListData={list} />
            </div>
            <ListEditor ListData={list} addAnimal={addAnimal} />
          </div>
        </>
      );
    }
  }
};

export default ReactAriaComponent;
