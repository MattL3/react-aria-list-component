import React from 'react';
import { ListData, useListData } from 'react-stately';
import './App.css';
import ListDisplay from './components/listDisplay';
import ListEditor from './components/listEditor';
import ListHistory from './components/listHistory';
import { addAnimalFunction, Key, formTempMemInterface, MyComponentProps, MyListData } from './types';

function App() {
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

  console.log(list.items);
  const customClassName001 = 'flex flex-center text-red-500';

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

export default App;
