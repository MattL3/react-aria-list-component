import React from 'react';
import ErrorDisplay from './errorDisplay';
import { Button, Label, ListBox, ListBoxItem } from 'react-aria-components';
import { listDisplayBufferInterface, ListDisplayInterface } from '../types';

//Collections of tailwind class names declared as constants to keep component renders easily readable.
// const wrapperClass:string = ;
const wrapperClass: string =
  'bg-slate-400  text-sky-200 rounded-lg px-4 m-2 flex flex-no-wrap flex-col w-4/5 sm:w-2/3 max-w-96';
const labelClass: string = 'm-1';
const listBoxClass: string =
  'bg-slate-500 rounded-xl my-2 p-2 text-sky-700 flex flex-nowrap flex-col';
const listBoxItemClass: string =
  'bg-lime-50 m-1 p-2 rounded-md flex flex-nowrap justify-between';
const listBoxItemLabelClass: string = 'm-1 p-2 rounded-md';
const listBoxItemButtonClass: string = 'bg-lime-200 my-1 p-2 rounded-md';
// const wrapperClass:string = ;

//Functional component meant to render list of items from state, with ability to remove items from the list with the included delete button
const ListDisplay: React.FC<ListDisplayInterface> = ({
  ListData,
  onPressFunc,
}) => {
  //check if any error occurs with ListData prop
  if (!ListData) {
    return (
      <>
        <ErrorDisplay />
      </>
    );
  } else {
    //local buffer of state
    const listDisplayBuffer: listDisplayBufferInterface[] = [];

    //loop through ListData state, only add items to local buffer where isDeleted == false
    ListData.items.forEach((element) => {
      if (element.isDeleted == false) {
        listDisplayBuffer.push(element);
      }
    });

    //return display of all animals where isDeleted == false, including button to delete entries
    return (
      <div className={wrapperClass}>
        <Label className={labelClass} aria-label={'Main list title'}>
          Main List Display
        </Label>
        <ListBox
          className={listBoxClass}
          items={listDisplayBuffer}
          aria-label={'History of list items added and removed'}
          selectedKeys={ListData.selectedKeys}
          onSelectionChange={ListData.setSelectedKeys}
        >
          {(item) => (
            <ListBoxItem
              className={listBoxItemClass}
              key={item.name}
              aria-label={item.name + ' label'}
              textValue={item.name}
            >
              <Label className={listBoxItemLabelClass}>{item.name}</Label>
              <Button
                className={listBoxItemButtonClass}
                aria-label={item.name + ' remove button'}
                onPress={() => {
                  onPressFunc(item.id, item);
                }}
              >
                delete
              </Button>
            </ListBoxItem>
          )}
        </ListBox>
      </div>
    );
  }
};

export default ListDisplay;
