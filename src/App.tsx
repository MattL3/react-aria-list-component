import React, { useEffect, useState } from 'react';
import { useListData } from 'react-stately';
import './App.css';
import ErrorDisplay from './components/errorDisplay';
import ListDisplay from './components/listDisplay';
import ListEditor from './components/listEditor';
import ListHistory from './components/listHistory';
import { addAnimalFunction, Key } from './types';

// const wrapperClass:string = ;
const errorWrapperClass:string = 'bg-gray-600 flex justify-center';
const appWrapperClass:string = 'bg-gray-600 text-violet-200 flex flex-wrap justify-center';
// const wrapperClass:string = ;

function App() {
  const [hasError, setHasError] = useState(false);

  let animals =   [
    { name: 'Aardvark', id: 0, isDeleted: false },
    { name: 'Kangaroo', id: 1, isDeleted: false },
    { name: 'Snake', id: 2, isDeleted: false }
  ];
  
  let list = useListData({
    initialItems: animals,
    initialSelectedKeys: ['Kangaroo'],
    getKey: (item) => item.name
  });

  if (!list) {
    setHasError(true);
  } else {
    // function removeAnimal(name: Key) {
    //   list.remove(name);
    // }
    function updateAnimal(name: Key,  newValue: {
      name: string;
      id: number;
      isDeleted: boolean;
    }) {
      list.update(name, {name: newValue.name, id: newValue.id, isDeleted: true});
    }
    function addAnimal(name: addAnimalFunction) {
      list.append(name);
    }
    // something happened during fetch, lets render some nice error screen
    if (hasError) {
      return (
        <>
          <div className={errorWrapperClass}>
            <ErrorDisplay />
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className={appWrapperClass}>
            <ListDisplay ListData={list} onPressFunc={updateAnimal} />
            <ListHistory ListData={list}/>
            <ListEditor ListData={list} addAnimal={addAnimal} />
          </div>
        </>
      )
    }
  }
}

export default App;
