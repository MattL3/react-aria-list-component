import React from 'react';
import { ListData, useListData } from 'react-stately';
import './App.css';
import ListDisplay from './components/listDisplay';
import ListEditor from './components/listEditor';
import ListHistory from './components/listHistory';
import { Key, MyClassProps, formTempMemInterface } from './types';

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

  function removeAnimal(name:Key) {
    list.remove(name);
  }

  function addAnimal(name: formTempMemInterface) {
    list.append(name);
  }

  const colors = {    black: "bg-black text-white",    blue: "bg-blue-500 text-white",    white: "bg-white text-black",  };

  return (
    <>
      <div className="flex flex-centertext-red-500">

      <ListDisplay list={list} removeAnimal={removeAnimal} />
      <ListHistory list={list} removeAnimal={removeAnimal} />
      {/* <ListEditor list={list} addAnimal={addAnimal} /> */}
      </div>
    </>
  )
}

export default App;
