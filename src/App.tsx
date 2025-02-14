import React, { useEffect, useState } from 'react';
import { ListData, useListData } from 'react-stately';
import './App.css';
import ErrorDisplay from './components/errorDisplay';
import ListDisplay from './components/listDisplay';
import ListEditor from './components/listEditor';
import ListHistory from './components/listHistory';
import { addAnimalFunction, Key, formTempMemInterface, MyComponentProps, MyListData } from './types';

const AppClass = 'bg-';

function App() {
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    try {
      // do something like fetching some data
    } catch (e) {
      // oh no! the fetch failed, we have no data to render!
      setHasError(true);
    }
  })

  let animals =   [
    { name: 'Aardvark', id: 0, },
    { name: 'Kangaroo', id: 1, },
    { name: 'Snake', id: 2, }
  ];
  
  let list = useListData({
    initialItems: animals,
    initialSelectedKeys: ['Kangaroo'],
    getKey: (item) => item.name
  });

  let history = useListData({
    initialItems: animals,
    initialSelectedKeys: ['Kangaroo'],
    getKey: (item) => item.name
  });

  if (!list || !history) {
    setHasError(true);
  } else {
    function removeAnimal(name: Key) {
      list.remove(name);
    }
    function addAnimal(name: addAnimalFunction) {
      list.append(name);
      history.append(name);
    }
    // something happened during fetch, lets render some nice error screen
    if (hasError) {
      return (
        <>
          <div className={'bg-gray-600'}>
            <ErrorDisplay />
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className={'bg-gray-600 text-violet-200 flex'}>
            <ListDisplay ListData={list} onPressFunc={removeAnimal} />
            <ListHistory ListData={history} onPressFunc={removeAnimal} />
            <ListEditor ListData={list} onPressFunc={addAnimal} />
          </div>
        </>
      )
    }
  }
}

export default App;
