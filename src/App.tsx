import React, { useEffect, useState } from 'react';
import { ListData, useListData } from 'react-stately';
import './App.css';
import ErrorDisplay from './components/errorDisplay';
import ListDisplay from './components/listDisplay';
import ListEditor from './components/listEditor';
import ListHistory from './components/listHistory';
import { addAnimalFunction, Key, formTempMemInterface, MyComponentProps, MyListData } from './types';

const customClassName001 = 'flex flex-center text-red-500';

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
  
  let list = useListData({
    initialItems: [
      { name: 'Aardvark', id: '0', },
      { name: 'Kangaroo', id: '1', },
      { name: 'Snake', id: '2', }
    ],
    initialSelectedKeys: ['Kangaroo'],
    getKey: (item) => item.name
  });

  function removeAnimal(name: Key) {
    list.remove(name);
  }
  function addAnimal(name: addAnimalFunction) {
    list.append(name);
  }

  // something happened during fetch, lets render some nice error screen
  if (hasError) {
    return (
      <>
        <div className={customClassName001}>
          <ErrorDisplay/>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className={customClassName001}>
          <ListDisplay ListData={list} onPressFunc={removeAnimal} />
          <ListHistory ListData={list} onPressFunc={removeAnimal} />
          <ListEditor ListData={list} onPressFunc={addAnimal} />
        </div>
      </>
    )
  }
}

export default App;
