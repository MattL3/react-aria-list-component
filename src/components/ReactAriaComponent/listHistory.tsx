import React from 'react';
import ErrorDisplay from '../errorDisplay';
import { Label, ListBox, ListBoxItem } from 'react-aria-components';
import { MyListData } from '../../types';
import { Filter } from 'bad-words';

//Collections of tailwind class names declared as constants to keep component renders easily readable.
// const wrapperFragment:string = ;
//
const wrapperFragment: string =
  'wrapperFragment' +
  ' ' +
  'bg-slate-400 text-gray-900 rounded-lg' +
  ' ' +
  'w-auto sm:w-1/2' +
  ' ' +
  'ml-0 sm:ml-2 p-4' +
  ' ' +
  'flex flex-no-wrap flex-col';
//

//
const historyListLabelFragment: string =
  'historyListLabelFragment' + ' ' + 'm-1';
//

//
const listBoxFragment: string =
  'listBoxFragment' +
  ' ' +
  'bg-slate-500 text-sky-700 rounded-xl' +
  ' ' +
  'p-2' +
  ' ' +
  'max-h-56 sm:max-h-96 overflow-y-scroll' +
  ' ' +
  'flex flex-nowrap flex-col';
//

//
const listBoxItemFragment: string =
  'listBoxItemFragment' +
  ' ' +
  'bg-lime-50 rounded-md' +
  ' ' +
  'm-1 p-2' +
  ' ' +
  'flex';
//

//
const listBoxItemLabelFragment: string =
  'listBoxItemLabelFragment' +
  ' ' +
  'rounded-md' +
  ' ' +
  'break-all' +
  ' ' +
  'm-1 p-2' +
  ' ' +
  'overflow-auto';
//

//
// const wrapperFragment:string = ;

//Functional component meant to render list of items from state, with ability to see all items in the list in spite of any that were removed in the main display.
const ListHistory: React.FC<MyListData> = ({ ListData }) => {
  const filter = new Filter();

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
              key={filter.clean(item.name)}
              aria-label={filter.clean(item.name) + ' label'}
              textValue={filter.clean(item.name)}
            >
              <Label className={listBoxItemLabelFragment}>
                {filter.clean(item.name)}
              </Label>
            </ListBoxItem>
          )}
        </ListBox>
      </div>
    );
  }
};

export default ListHistory;
