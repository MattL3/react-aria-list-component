import React from 'react';
import ErrorDisplay from './errorDisplay';
import { Label, ListBox, ListBoxItem } from 'react-aria-components';
import { MyListData } from '../types';

//Collections of tailwind class names declared as constants to keep component renders easily readable.
// const wrapperClass:string = ;
const wrapperClass: string =
  'bg-slate-400  src/components/listEditor.tsxtext-sky-200 rounded-lg px-4 m-2 flex flex-no-wrap flex-col w-2/5 sm:w-1/3 max-w-96';
const historyListLabelClass: string = 'm-1';
const listBoxClass: string =
  'bg-slate-500 rounded-xl my-2 p-2 text-sky-700 flex flex-nowrap flex-col';
const listBoxItemClass: string = 'bg-lime-50 m-1 p-2 rounded-md flex';
const listBoxItemLabelClass: string = 'm-1 p-2 rounded-md overflow-auto';
// const wrapperClass:string = ;

//Functional component meant to render list of items from state, with ability to see all items in the list in spite of any that were removed in the main display.
const ListHistory: React.FC<MyListData> = ({ ListData }) => {
  //check if any error occurs with ListData prop
  if (ListData == undefined) {
    return (
      <>
        <ErrorDisplay />
      </>
    );
  } else {
    return (
      <div className={wrapperClass}>
        <Label
          className={historyListLabelClass}
          aria-label={'History list title'}
        >
          History List
        </Label>
        <ListBox
          className={listBoxClass}
          items={ListData.items}
          aria-label={'History of list items added and removed'}
        >
          {(item) => (
            <ListBoxItem
              className={listBoxItemClass}
              key={item.name}
              aria-label={item.name + ' label'}
              textValue={item.name}
            >
              <Label className={listBoxItemLabelClass}>{item.name}</Label>
            </ListBoxItem>
          )}
        </ListBox>
      </div>
    );
  }
};

export default ListHistory;
