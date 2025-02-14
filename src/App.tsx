import React from 'react';
import { ListData, useListData } from 'react-stately';
import './App.css';
// import ListDisplay from './components/listDisplay';
// import ListEditor from './components/listEditor';
import ListHistory from './components/listHistory';
import { Key, formTempMemInterface } from './types';

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

      let formTempMem: formTempMemInterface = {
        name: '',
        id: '',
    };

  function removeAnimal(name:Key) {
    list.remove(name);
  }

  function addAnimal(name: formTempMemInterface) {
    list.append(name);
  }
  console.log(list.items);

  return (
    <>
      <div className="flex flex-centertext-red-500">

      {/* <ListDisplay list={list} removeAnimal={removeAnimal} /> */}
      <ListHistory ListData={list} onPressFunc={removeAnimal}/>
      {/* <ListEditor list={list} addAnimal={addAnimal} /> */}
      </div>
    </>
  )
}

export default App;
