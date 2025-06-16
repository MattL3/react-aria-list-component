import React from 'react';
import ErrorDisplay from '../errorDisplay';
import { Label, ListBox, ListBoxItem } from 'react-aria-components';
import { MyListData } from '../../types';

//Collections of tailwind class names declared as constants to keep component renders easily readable.
// const wrapperFragment:string = ;
const wrapperFragment: string =
  'wrapperFragment' +
  ' ' +
  'bg-slate-400 text-sky-200 rounded-lg' +
  ' ' +
  'px-4 m-2' +
  ' ' +
  'flex flex-no-wrap flex-col' +
  ' ' +
  'w-2/5 sm:w-1/3 max-w-96';
const historyListLabelFragment: string =
  'historyListLabelFragment' + ' ' + 'm-1';
const listBoxFragment: string =
  'listBoxFragment' +
  ' ' +
  'bg-slate-500 text-sky-700 rounded-xl' +
  ' ' +
  'my-2 p-2' +
  ' ' +
  'flex flex-nowrap flex-col';
const listBoxItemFragment: string =
  'listBoxItemFragment' +
  ' ' +
  'bg-lime-50 rounded-md' +
  ' ' +
  'm-1 p-2' +
  ' ' +
  'flex';
const listBoxItemLabelFragment: string =
  'listBoxItemLabelFragment' +
  ' ' +
  'rounded-md' +
  ' ' +
  'm-1 p-2' +
  ' ' +
  'overflow-auto';
// const wrapperFragment:string = ;

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
      <div className={wrapperFragment}>
        <Label
          className={historyListLabelFragment}
          aria-label={'History list title'}
        >
          History List
        </Label>
        <ListBox
          className={listBoxFragment}
          items={ListData.items}
          aria-label={'History of list items added and removed'}
        >
          {(item) => (
            <ListBoxItem
              className={listBoxItemFragment}
              key={item.name}
              aria-label={item.name + ' label'}
              textValue={item.name}
            >
              <Label className={listBoxItemLabelFragment}>{item.name}</Label>
            </ListBoxItem>
          )}
        </ListBox>
      </div>
    );
  }
};

export default ListHistory;
